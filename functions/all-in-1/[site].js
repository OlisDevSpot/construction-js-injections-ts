export async function onRequest(context) {
  const site = context.params?.site;

  console.log({ site });

  try {
    console.log("trying to import", `../../companies/all-in-1/${site}.js`);
    const mod = await import(`../../companies/all-in-1/${site}.js`);
    console.log({ mod });
    const script = mod.default;

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
