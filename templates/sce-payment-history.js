setTimeout(() => {
  createButton();
}, 3000);

function createButton() {
  const actionButtons = Array.from(document.querySelectorAll("button")).filter(
    (btn) => btn.querySelector("label") !== null
  );
  const actionButton = actionButtons[0].querySelector("label");
  console.log(actionButton);
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
      el.textContent === "Direct Payment" || el.textContent === "Online Payment"
    );
  });

  const billChargesParents = billChargesDivs.map((div) => {
    return div.parentNode.parentNode.parentNode;
  });

  const allPaymentsParents = paymentDivs.map((div) => {
    return div.parentNode.parentNode;
  });

  const chargesSpans = billChargesParents.map((parent) => {
    return parent.lastChild.querySelector("span");
  });

  const paymentsParents = allPaymentsParents.filter((parent) => {
    const shouldIterate = !parent.classList.contains("visible-xs");
    return shouldIterate;
  });

  console.log(paymentsParents);

  const paymentsSpans = paymentsParents.map((parent) => {
    return parent.querySelector("div").lastChild.querySelector("span");
  });

  console.log(paymentsSpans);

  const charges = chargesSpans.map((charge) => {
    const dollarAsNumber = formatAsNumber(charge.innerText);
    return dollarAsNumber;
  });

  const upCharges = charges.map((charge, index) => {
    if (index < 3) return charge;
    return charge * 1.03;
  });

  chargesSpans.forEach((chargeSpan, index) => {
    chargeSpan.innerText = formatAsDollars(upCharges[index]);
  });

  paymentsSpans.forEach((paymentSpan, index) => {
    paymentSpan.innerText = `-${formatAsDollars(upCharges[index])}`;
  });

  console.log(upCharges);
}

function formatAsNumber(str) {
  return parseFloat(str.replace(/[$,]/g, ""));
}

function formatAsDollars(amount) {
  if (typeof amount !== "number") {
    amount = parseFloat(amount);
  }

  if (isNaN(amount)) return null;

  return `$${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
