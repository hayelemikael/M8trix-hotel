/* M8trix Hotels — contact details and social media, used by index.html and menu.html.
   Change a link here once and both pages update. To add an account, add one line to "social".
   To hide one, delete its line. */
window.M8 = {
  address: {
    en: "Gedam Sefer, near Soramba, Piazza, Addis Ababa",
    am: "ገዳም ሰፈር፣ ሶራምባ አጠገብ፣ ፒያሳ፣ አዲስ አበባ"
  },
  mapsUrl: "https://maps.app.goo.gl/N5wEE6fY8pZczPJu9",   // Google Maps page of the hotel (also used for "Review us")
  phone: { display: "0912 209 474", tel: "+251912209474" },   // reception (calls)
  email: "m8trixhotel@gmail.com",
  messaging: {
    display: "0912 209 474",
    whatsapp: "251912209474",        // international format, digits only
    telegram: "+251912209474"        // opens a Telegram chat with this number
  },
  hashtag: "#M8trixPiazza",
  linktree: "https://linktr.ee/m8trixhotel",
  social: [
    { name: "TikTok",    handle: "@m8trixhotel", url: "https://www.tiktok.com/@m8trixhotel",   en: "Short videos from the hotel",       am: "ከሆቴሉ አጫጭር ቪዲዮዎች" },
    { name: "Instagram", handle: "@m8trixhotel", url: "https://www.instagram.com/m8trixhotel", en: "Photos and stories",                 am: "ፎቶዎች እና ስቶሪዎች" },
    { name: "Facebook",  handle: "m8trixhotel",  url: "https://www.facebook.com/m8trixhotel",  en: "News from the hotel",                am: "የሆቴሉ ዜናዎች" },
    { name: "YouTube",   handle: "@M8trixHotel", url: "https://www.youtube.com/@M8trixHotel",  en: "Videos and tours",                   am: "ቪዲዮዎች እና ጉብኝቶች" },
    { name: "Threads",   handle: "@m8trixhotel", url: "https://www.threads.com/@m8trixhotel",  en: "Updates",                            am: "አዳዲስ መረጃዎች" },
    { name: "X",         handle: "@m8trixhotel", url: "https://x.com/m8trixhotel",             en: "Updates",                            am: "አዳዲስ መረጃዎች" }
  ]
};

/* Helpers shared by both pages */
window.M8.waChat = function (text) { return "https://wa.me/" + M8.messaging.whatsapp + (text ? "?text=" + encodeURIComponent(text) : ""); };
window.M8.tgChat = function () { return "https://t.me/" + M8.messaging.telegram; };
window.M8.shareLinks = function (url, text) {
  var u = encodeURIComponent(url), t = encodeURIComponent(text);
  return { whatsapp: "https://wa.me/?text=" + t + "%20" + u, telegram: "https://t.me/share/url?url=" + u + "&text=" + t };
};
/* The page's public address, or "" when it is shown inside a preview frame (nothing useful to share). */
window.M8.publicUrl = function (configured) {
  if (configured) return configured;
  var framed; try { framed = window.self !== window.top; } catch (e) { framed = true; }
  return (!framed && /^https?:$/.test(location.protocol)) ? location.origin + location.pathname : "";
};
