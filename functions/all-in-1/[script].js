import { default as buildingCostcoScript } from "../../companies/all-in-1/building-costco-article.js";
import { default as bbbCleanupScript } from "../../companies/all-in-1/bbb-cleanup.js";

const scripts = {
  "building-costco-article": buildingCostcoScript,
  "bbb-cleanup": bbbCleanupScript,
};

export async function onRequest(context) {
  const _scriptRaw = context.params?.script;
  const _script = _scriptRaw.replace(".js", "");

  try {
    const script = scripts[_script];

    console.log({ script });

    return new Response(script, {
      headers: {
        "content-type": "application/javascript",
        "cache-control": "public, max-age=10",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response("// Script not found", { status: 404 });
  }
}
