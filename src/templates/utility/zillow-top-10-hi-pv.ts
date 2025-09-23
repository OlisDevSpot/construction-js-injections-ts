import { ScriptTemplate } from "@/types/templates";

type CurrentUpgradeGroup = "ee" | "hi";

function templateFn() {
  let currentUpgradeGroup: CurrentUpgradeGroup = "ee";
  const headings = Array.from(document.querySelectorAll("h3")).slice(0, 10);

  const upgrades = [
    { name: "Solar Panels", cost: 43448, recoup: 1.35, },
    { name: "Roofing replacement", cost: 31130, recoup: 1.28, },
    { name: "HVAC upgrade", cost: 29760, recoup: 1.23, },
    { name: "Double pane windows", cost: 32550, recoup: 1.22, },
    { name: "Dry landscaping", cost: 25871, recoup: 1.22, },
    { name: "Main panel upgrade", cost: 7800, recoup: 1.2, },
    { name: "Additional Dwelling Unit", cost: 296445, recoup: 1.15, },
    { name: "Attic insulation", cost: 14540, recoup: 1.15, },
    { name: "Kitchen upgrade", cost: 62000, recoup: 1.13, },
    { name: "Bathroom upgrade", cost: 39500, recoup: 1.11, },
  ];

  const hiUpgrades = [
    { name: "Bathroom remodel", cost: 41290, recoup: 1.22 },
    { name: "Kitchen remodel", cost: 68370, recoup: 1.19 },
    { name: "Interior paint", cost: 35775, recoup: 1.18 },
    { name: "Tile floor", cost: 59140, recoup: 1.14 },
    { name: "Addition", cost: 128450, recoup: 1.13 },
    { name: "Laminate floor", cost: 46700, recoup: 1.12 },
    { name: "Foundation reinforcement", cost: 81450, recoup: 1.12 },
    { name: "Repiping", cost: 65250, recoup: 1.11 },
    { name: "Electrical rewire", cost: 49710, recoup: 1.09 },
    { name: "Recess lighting", cost: 33450, recoup: 1.09 },
  ];

  function overrideButtons() {
    const owningSpan = Array.from(
      document.querySelectorAll("a span span")
    ).find((span) => span.textContent.trim().toLowerCase() === "owning");
    const owningButton = owningSpan?.closest("a");

    owningSpan!.textContent = "Energy Efficiency";
    owningButton!.href = "#";
    owningButton!.onclick = (e) => {
      e.preventDefault();
      currentUpgradeGroup = "ee";
      updateHeadings();
    };

    const hiSpan = Array.from(document.querySelectorAll("a span span")).find(
      (span) => span.textContent.trim().toLowerCase() === "home improvement"
    );
    const hiButton = hiSpan?.closest("a");
    hiButton!.onclick = (e) => {
      e.preventDefault();
      currentUpgradeGroup = "hi";
      updateHeadings();
    };

    hiButton!.href = "";
  }

  function updateHeadings() {
    const currentUpgrades = currentUpgradeGroup === "hi" ? hiUpgrades : upgrades;

    headings.forEach((heading, index) => {
      const currentUpgrade = currentUpgrades[index];
      const upgradeInfoUl = heading.nextElementSibling as Element;

      if (!headings[index] || !currentUpgrade) return;

      headings[index].innerHTML =
        `${index + 1}. <strong>${currentUpgrade.name}</strong>`;

      const lines = upgradeInfoUl.querySelectorAll("li");

      const resaleAmt = currentUpgrade.cost * currentUpgrade.recoup;

      if (!lines[0] || !lines[1] || !lines[2]) return;

      lines[0].innerText = "Cost: " + formatAsCurrency(currentUpgrade.cost);
      lines[1].innerText = "Resale: " + formatAsCurrency(resaleAmt);
      lines[2].innerText =
        "Recoup: " + `${Math.round(currentUpgrade.recoup * 100)}%`;
    });
  }

  function formatAsCurrency(number: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(number);
  }

  overrideButtons();
  updateHeadings();
}

export const zillowTop10HiPv: ScriptTemplate = {
  templateFn,
  matcher:
    "https://www.zillow.com/learn/best-home-improvements-to-increase-value*",
};
