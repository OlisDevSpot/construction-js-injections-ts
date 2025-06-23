export async function onRequest(context) {
  const site = context.params?.site;

  console.log({ site });

  try {
    const mod = await import(`../../companies/all-in-1/${site}`);
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
    return new Response("// Script not found", { status: 404 });
  }
}
