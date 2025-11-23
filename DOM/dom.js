// Change this if your backend is on different host/port
const API_BASE = "http://localhost:8080/api/batches";

const form = document.getElementById("batchForm");
const messageEl = document.getElementById("message");
const listEl = document.getElementById("batchesList");
const refreshBtn = document.getElementById("refreshBtn");

function showMessage(text, type = "success") {
  messageEl.textContent = text;
  messageEl.className = "message " + (type === "success" ? "success" : "error");
  setTimeout(() => {
    messageEl.textContent = "";
    messageEl.className = "message";
  }, 4000);
}

async function createBatch(data) {
  try {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (res.status === 201) {
      const created = await res.json();
      showMessage(`Batch created: ${created.name} (₹${created.fees})`, "success");
      return created;
    } else {
      const errText = await res.text();
      showMessage(`Failed to create batch: ${res.status} ${errText}`, "error");
    }
  } catch (err) {
    showMessage(`Network error: ${err.message}`, "error");
  }
  return null;
}

async function fetchBatches() {
  listEl.innerHTML = "<li>Loading...</li>";
  try {
    const res = await fetch(API_BASE);
    if (res.ok) {
      const batches = await res.json();
      renderBatches(batches);
    } else if (res.status === 204) {
      listEl.innerHTML = "<li><small class='muted'>No batches found.</small></li>";
    } else {
      listEl.innerHTML = `<li class="error">Failed to fetch: ${res.status}</li>`;
    }
  } catch (err) {
    listEl.innerHTML = `<li class="error">Network error: ${err.message}</li>`;
  }
}

function renderBatches(batches) {
  if (!Array.isArray(batches) || batches.length === 0) {
    listEl.innerHTML = "<li><small class='muted'>No batches found.</small></li>";
    return;
  }
  listEl.innerHTML = "";
  batches.forEach(b => {
    const li = document.createElement("li");
    li.innerHTML = `<div>
                      <strong>${escapeHtml(b.name)}</strong><br/>
                      <small class="muted">ID: ${b.id || b._id || "-"}</small>
                    </div>
                    <div>₹${b.fees}</div>`;
    listEl.appendChild(li);
  });
}

// Minimal escaping to avoid injection in this demo
function escapeHtml(s){
  if(!s) return "";
  return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const fees = Number(form.fees.value);

  if (!name || !fees) {
    showMessage("Please provide both name and fees.", "error");
    return;
  }

  const created = await createBatch({ name, fees });
  if (created) {
    form.reset();
    fetchBatches();
  }
});

refreshBtn.addEventListener("click", fetchBatches);

// Initial load
fetchBatches();

let btn = document.querySelector("button");
console.dir(btn);


function sayHello () {
  alert("Say Hello !");
}

btn.onclick = sayHello;




