import { default as buildingCostcoScript } from "../../companies/all-in-1/building-costco-article.js";

const scripts = {
  "building-costco-article": buildingCostcoScript,
};

export async function onRequest(context) {
  const _script = context.params?.script;

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
