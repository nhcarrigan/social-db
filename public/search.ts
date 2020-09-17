const search = async (username: HTMLInputElement) => {
  const place = document.getElementById("data");
  const base = location.href.substring(0, location.href.length - 6);
  const data = await fetch(base + "data?user=" + username.value);
  const parsed = await data.json();
  let content = `<h1>${parsed.username}</h1>`;
  if (parsed.facebook)
    content += `<p><a href="${parsed.facebook}">Facebook</a></p>`;
  if (parsed.twitter)
    content += `<p><a href="${parsed.twitter}">Twitter</a></p>`;
  if (parsed.linkedin)
    content += `<p><a href="${parsed.linkedin}">LinkedIn</a></p>`;
  if (parsed.github) content += `<p><a href="${parsed.github}">GitHub</a></p>`;
  if (parsed.tumblr) content += `<p><a href="${parsed.tumblr}">Tumblr</a></p>`;
  if (parsed.portfolio)
    content += `<p><a href="${parsed.portfolio}">Portfolio</a></p>`;
  if (place) place.innerHTML = content;
};
