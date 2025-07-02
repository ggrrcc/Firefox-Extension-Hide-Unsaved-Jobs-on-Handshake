// // Click all "Hide" buttons
// const hideButtons = document.querySelectorAll('button[aria-label="Hide"]');
// console.log(`Found ${hideButtons.length} hide buttons.`);
// hideButtons.forEach(btn => btn.click());

// Helper to delay execution
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main async function to hide jobs
async function hideUnsavedJobs() {
  const hideButtons = document.querySelectorAll('button[aria-label="Hide"]');
  let skipped = 0;
  let clicked = 0;

  for (const hideBtn of hideButtons) {
    const jobCard = hideBtn.closest('div[class^="sc-"]'); // tweak this if needed
    if (!jobCard) continue;

    const saveBtn = jobCard.querySelector('button[aria-label="Unsave"]');
    if (saveBtn) {
      skipped++;
      continue;
    }

    hideBtn.click();
    clicked++;
    await sleep(50); // Wait 50 ms between clicks
  }

  console.log(`✅ Done: ${clicked} jobs hidden, ${skipped} jobs skipped (saved).`);
}

hideUnsavedJobs();
