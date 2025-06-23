export const onRequestGet = async ({ params }) => {
  const site = params?.site;

  try {
    const mod = await import(`../companies/all-in-1/${site}`);
    const script = mod.default;

    return new Response(script, {
      headers: {
        "content-type": "application/javascript",
        "cache-control": "public, max-age=10",
      },
    });
  } catch (err) {
    return new Response("// Script not found", { status: 404 });
  }
};
