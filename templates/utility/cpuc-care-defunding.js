function templateFn() {
  const divHTML = `
	<div class="alert alert-warning  d-sm-flex  alert-dismissible fade show" role="alert">
    <div class="alert__pre icon-exclamation-triangle" aria-hidden="true">
    </div>
    <div class="alert__main">
      <div class="rich-text">
        <p><strong>Important consideration!</strong>&nbsp;The CARE / FERA programs no longer accept new applications. Effective Feb 1, 2026, all existing CARE households will no longer receive CARE / FERA assistance and revert back to non-CARE rates.</p>
				<ul>
			    <li>If you need more information on the CARE / FERA funding, please visit&nbsp;<a href="https://www.sce.com/save-money/income-qualified-programs/care-fera">SCE official CARE / FERA page</a>.</li>
			    <li> In January 2025, CPUC President Alice Reynolds and California Department of Technology Director Liana Bailey-Crimmins submitted a letter to California’s Congressional Delegation urging Congress to approve additional funding for the CARE / FERA programs. Unfortunately, the request has been denied. With no additional funding, the CARE / FERA programs will no longer be applicable for new and existing households. Those houses relying on this assistance can apply to other incentive and assistance programs, like the Energy Stabilization Program for green energy or the LIHEAP initiative</li>
				</ul>
      </div>
    </div>
  </div>`;

  const mainArticle = document.querySelectorAll(".rich-text")[1];

  const alertDiv = document.createElement("div");
  alertDiv.innerHTML = divHTML;

  mainArticle.firstElementChild.before(alertDiv);
}

export const cpucCareDefunding = {
  templateFn,
  matcher:
    "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-costs/care-fera-program*",
};
