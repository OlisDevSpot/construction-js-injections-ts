import { ScriptTemplate } from "@/types/templates";

function templateFn() {
  setTimeout(() => {
    createButton();
  }, 3000);

  function createButton() {
    const actionButtons = Array.from(
      document.querySelectorAll("button")
    ).filter((btn) => btn.querySelector("label") !== null);
    const actionButton = actionButtons[0]?.querySelector("label");
    if (!actionButton) return;
    actionButton.addEventListener("click", (e) => {
      run();
    });
  }

  function run() {
    const allDivs = document.querySelectorAll("div");

    const billChargesDivs = Array.from(allDivs).filter((el) => {
      return el.textContent === "Bill Charges ";
    });

    const paymentDivs = Array.from(allDivs).filter((el) => {
      return (
        el.textContent === "Direct Payment" ||
        el.textContent === "Online Payment"
      );
    });

    const billChargesParents = billChargesDivs.map((div) => {
      return div.parentElement?.parentElement?.parentElement;
    });

    const allPaymentsParents = paymentDivs.map((div) => {
      return div.parentElement?.parentElement;
    });

    const chargesSpans = billChargesParents.map((parent) => {
      return parent?.lastElementChild?.querySelector("span");
    });

    const paymentsParents = allPaymentsParents.filter((parent) => {
      const shouldIterate = !parent?.classList.contains("visible-xs");
      return shouldIterate;
    });

    const paymentsSpans = paymentsParents.map((parent) => {
      if (!parent) return null;
      return parent
        .querySelector("div")
        ?.lastElementChild?.querySelector("span");
    });

    const charges = chargesSpans.map((charge) => {
      const dollarAsNumber = formatAsNumber(charge?.innerText || "0");
      return dollarAsNumber;
    });

    const upCharges = charges.map((charge, index) => {
      if (index < 3) return charge;
      return charge * 1.03;
    });

    chargesSpans.forEach((chargeSpan, index) => {
      if (!chargeSpan) return;
      chargeSpan.innerText = formatAsDollars(upCharges[index] || 0) || "0";
    });

    paymentsSpans.forEach((paymentSpan, index) => {
      if (!paymentSpan) return;
      paymentSpan.innerText = `-${formatAsDollars(upCharges[index] || "0")}`;
    });

    console.log(upCharges);
  }

  function formatAsNumber(str: string) {
    return parseFloat(str.replace(/[$,]/g, ""));
  }

  function formatAsDollars(amount: string | number): string | null {
    if (typeof amount !== "number") {
      amount = parseFloat(amount);
    }

    if (isNaN(amount)) return null;

    return `$${amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }
}

export const scePaymentHistory: ScriptTemplate = {
  templateFn,
  matcher: "https://www.sce.com/mysce/billsnpayments*",
};
