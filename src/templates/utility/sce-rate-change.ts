import { ScriptTemplate } from "../../types/templates";

type MonthString = "20240101" | "20240301" | "20240601" | "20241001";

type MonthUpdate = {
  [key in MonthString]: {
    updateHeader?: boolean;
    amounts: [
      {
        currentAverageBill: number;
        dollarIncrease: number;
        newAverageBill: number;
        percentIncrease: number;
      },
      {
        currentAverageBill: number;
        dollarIncrease: number;
        newAverageBill: number;
        percentIncrease: number;
      },
    ];
  };
};

function templateFn() {
  const chartDate = window.location.href.split("/").slice(-1)[0] as MonthString;

  const newAmounts: MonthUpdate = {
    "20240101": {
      amounts: [
        {
          currentAverageBill: 184.22,
          dollarIncrease: 3.69,
          newAverageBill: 187.91,
          percentIncrease: 0.02,
        },
        {
          currentAverageBill: 121.07,
          dollarIncrease: 2.42,
          newAverageBill: 123.49,
          percentIncrease: 0.02,
        },
      ],
    },
    "20240301": {
      amounts: [
        {
          currentAverageBill: 187.22,
          dollarIncrease: 2.24,
          newAverageBill: 189.46,
          percentIncrease: 0.012,
        },
        {
          currentAverageBill: 123.49,
          dollarIncrease: 1.48,
          newAverageBill: 124.97,
          percentIncrease: 0.012,
        },
      ],
    },
    "20240601": {
      amounts: [
        {
          currentAverageBill: 189.46,
          dollarIncrease: 13.45,
          newAverageBill: 202.91,
          percentIncrease: 0.071,
        },
        {
          currentAverageBill: 124.97,
          dollarIncrease: 8.77,
          newAverageBill: 133.74,
          percentIncrease: 0.0702,
        },
      ],
    },
    "20241001": {
      updateHeader: true,
      amounts: [
        {
          currentAverageBill: 202.91,
          dollarIncrease: 9.13,
          newAverageBill: 212.04,
          percentIncrease: 0.045,
        },
        {
          currentAverageBill: 133.74,
          dollarIncrease: 5.61,
          newAverageBill: 139.35,
          percentIncrease: 0.042,
        },
      ],
    },
  };

  setTimeout(() => {
    updateMonth(chartDate);
  }, 200);

  function updateMonth(month: MonthString): void {
    const { amounts, updateHeader } = newAmounts[month];

    if (updateHeader) {
      const sections = document.querySelectorAll(".copy-block-text.black-text");
      const sectionOne = sections[0]!.getElementsByTagName("h2")[0];
      sectionOne!.innerText = "Our Rates are Increasing on October 1, 2024";
    }

    const tableHead = document.querySelectorAll("thead tr")[0];
    const ths = tableHead?.querySelectorAll("th");
    if (!ths?.length) return;
    ths[2]!.innerText = "Proposed increase";
    ths[4]!.innerText = "%Increase";

    const firstRow = document.querySelectorAll("tbody tr")[0];
    const secondRow = document.querySelectorAll("tbody tr")[1];

    const firstTds = firstRow?.querySelectorAll<HTMLTableCellElement>("td");
    if (!firstTds || !firstTds?.length) return;
    firstTds[1]!.innerText = `$${amounts[0].currentAverageBill}`;
    firstTds[2]!.innerText = `$${amounts[0].dollarIncrease}`;
    firstTds[3]!.innerText = `$${amounts[0].newAverageBill}`;
    firstTds[4]!.innerText = `${amounts[0].percentIncrease * 100}%`;

    const secondTds = secondRow?.querySelectorAll("td");
    if (!secondTds?.length) return;
    secondTds[1]!.innerText = `$${amounts[1].currentAverageBill}`;
    secondTds[2]!.innerText = `$${amounts[1].dollarIncrease}`;
    secondTds[3]!.innerText = `$${amounts[1].newAverageBill}`;
    secondTds[4]!.innerText = `${amounts[1].percentIncrease * 100}%`;
  }
}

export const sceRateChange: ScriptTemplate = {
  templateFn,
  matcher: "https://www.sce.com/save-money/rates-financing/*",
};
