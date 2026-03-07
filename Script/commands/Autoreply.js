const axios = require("axios");

const apiList = "https://raw.githubusercontent.com/shahadat-sahu/SAHU-API/refs/heads/main/SAHU-API.json";

const getMainAPI = async () => (await axios.get(apiList)).data.simsimi;

module.exports.config = {
  name: "autoreplybot",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "SHAHADAT SAHU",
  usePrefix: false,
  commandCategory: "Chat",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, body, senderID } = event;
  if (!body) return;

  const msg = body.toLowerCase().trim();

  const responses = {
    "miss you": "অরেক বেডারে Miss না করে xan মেয়ে হলে বস সুমন রে হাঙ্গা করো😶👻😘",
    "miss u too": "হুম আমি ও তোমাকে Miss করি... কিন্তু সুমন বস বেশি করে 😏💖",
    "kiss de": "কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬",
    "👍": "সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️",
    "hi": "এত হাই-হ্যালো কর ক্যান প্রিও..!😜🫵",
    "bc": "SAME TO YOU😊",
    "pro": "Khud k0o KYa LeGend SmJhTi Hai 😂",
    "good morning": "GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚",
    "good night": "Sweet Dream babu… তবে আগে সুমন বস কে GN বলে নিও 😏💤",
    "tor ball": "~ এখনো বাল উঠে নাই নাকি তোমার?? 🤖",
    "sumon": "উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",
    "Creator": "‎[creator:☞ MD SUMON ISLAM ☜\nWhatsApp: +8801975257710",
    "admin": "He is Sumon aru তাকে সবাই Admin হিসেবে চিনে😘☺️",
    "babi": "এ তো হাছিনা হে মেরে দিলকি দারকান হে মেরি জান হে😍.",
    "chup": "তুই চুপ চুপ কর পাগল ছাগল",
    "Assalamualaikum": "Walaikumassalam❤️‍🩹",
    "ss time": "⚠️𝗦𝗦⚠️𝗧𝗜𝗠𝗘⚠️𝗡𝗢𝗧𝗜𝗖𝗘⚠️ 

ꕥ̳̳̳̳̳̳̳̿̿̿̿̿ꔷ⃟➤⃟♥⃪𝐋𝐎𝐕𝐄ꔷ⃟𝐄X𝐏𝐑𝐄𝐒𝐒ꔷ⃟𝐌𝐔𝐒ICꔷ⃟BAND☬ꕥ̳̳̳̳̳̳̳̿̿̿̿̿

📌সকল 𝐂.𝐄.𝐎 𝐩𝐞𝐫𝐬𝐨𝐧 𝐀𝐃𝐌𝐈𝐍 এবং 𝐌𝐄𝐌𝐁𝐄𝐑𝐒 দের উদ্দেশ্য বলতাছি,____/🔊🔊📣 

📌প্রতিদিন  রাত  8:00থেকে 9:00পর্যন্ত 𝗦𝗦 টাইম__/
⚠️⚠️⚠️⚠️,, 

📌সকলেই 𝗦𝗦 টাইমে কলে থাকবেন,,[বাধ্যতামূলক]⚠️⚠️⚠️⚠️⚠️ 

📌② দিন 𝗦𝗦 টাইমে না থাকলে এবং 𝐌𝐞𝐧𝐭𝐢𝐨𝐧 করে কলে না পাইলে বিনা 𝗡𝗢𝗧𝗜𝗖𝗘 কিক দিয়ে বের করে দিবে 𝐀𝐃𝐌𝐈𝐍___/✅✅✅প্রতিবন্ধি 𝐍𝐨𝐭 𝐀𝐥𝐥𝐨𝐰⚠️✅ 

📌অন্যথায়, যদি 𝗦𝗦 টাইমে কলে না থাকেন, 𝐀𝐃𝐌𝐈𝐍 কে 𝗡𝗢𝗧𝗜𝗖𝗘 না দিয়ে না বলে,যদি অফ লাইন থাকেন,অনলাইন থেকে এনাদার কলে বা অন্য কোথাও সময় দেন, তাহলে 𝐀𝐃𝐌𝐈𝐍 প্যানেল কিক দিতে বাধ্য থাকিবে,⚠️✅✅✅✅


📌আশা করি 𝐌𝐞𝐧𝐭𝐢𝐨𝐧 করে কাউকে কলে তুলতে হবে নাহ, ✅⚠️⚠️⚠️⚠️ 

𝐓𝐞𝐱𝐭 𝖔𝖋𝖋 10 𝐌𝐢𝐧𝐢𝐭✅
𝐅𝐨𝐥𝐥𝐨𝐰 𝐍𝐨𝐭𝐢𝐜𝐞⚠️

ss time activities chek member remove 100%.........so ss time dnt miss,,,,,,, uuummaaahhh

@everyone

Amader ss time 8:00 theke 9:00porjonto baddhota mulok ... Nije thakben and jar jar sate jogajog ase tader k niye asben 🙏😒... Ss time sob parson k call e chai 😐😐@evryone😌


★creator-sumon★
Text Off 10 minit❌❌✅",
    "kiss me": "তুমি পঁচা তোমাকে কিস দিবো না 🤭",
    "thanks": "এতো ধন্যবাদ না দিয়ে আমার বস সুমন রে তোর গার্লফ্রেন্ড টা দিয়ে দে..!🐸🥵",
    "i love you": "মেয়ে হলে আমার বস সুমন এর ইনবক্সে এখুনি গুঁতা দিন🫢😻",
    "love you": "ভালোবাসা নামক আবলামী করতে চাইলে Boss সুমন এর ইনবক্সে গুতা দিন 😘",
    "by": "কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️",
    "bot ruls": "প্রতিদিন মেম্বার পার্সনদের ৪ থেকে ৫ ঘন্টা সময় দিতে হবে🥰😘",
    "bot er baccha": "আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️",
    "tor nam ki": "MY NAME IS ─MD SUMON ISLAM💖",
    "pic de": "এন থেকে সর দুরে গিয়া মর😒",
    "cudi": "এত চোদা চুদি করস কেনো..!🥱🌝🌚",
    "bal": "রাগ করে না সোনা পাখি 🥰",
    "heda": "এতো রাগ শরীরের জন্য ভালো না 🥰",
    "boda": "ভাই তুই এত হাসিস না..!🌚🤣",
    "kire ki koros": "তোমার কথা ভাবতে ছি জানু 😚",
    "ki kren": "বস সুমন এর সাথে প্রেমে ব্যস্ত আছি 😏💘",
    "ki re bot": "হ্যাঁ সব কেমন আছেন আপনার ওই খানে উম্মাহ 😘😽🙈",
    "valo aso": "হ্যাঁ রে প্রিও, বস সুমন এর দোয়ায় ভালো আছি 😌💞",
    "pagol": "হুম পাগল, কিন্তু তোমারই পাগল 😏😂",
    "breakup": "চিন্তা করিস না… সুমন বস তো আছেই তোকে নতুন জন দিয়া দিবে 😎🔥",
    "tui ke": "আমি তোর বস সুমন এর LOVE EXPRESS ALL MUSIC BAND CHAT BOT 😏",
    "new members": "তাহলে বলে দাও নিউ মেম্বার কে বক্স যেন সময় দেয় না🥰",
    "hmm": "Hmmm কিসের হুমম জানু 🥵",
    "love": "Love করলে সরাসরি সুমন বস কে বল জানু 😻🔥"
  };

  if (!responses[msg]) return;

  if (!global.client.handleReply) global.client.handleReply = [];

  return api.sendMessage(
    responses[msg],
    threadID,
    (err, info) => {
      global.client.handleReply.push({
        name: this.config.name,
        messageID: info.messageID,
        author: senderID,
        type: "sahu"
      });
    },
    messageID
  );
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
  if (event.senderID !== handleReply.author) return;

  try {
    const text = event.body.trim();

    const base = await getMainAPI();
    const link = `${base}/simsimi?text=${encodeURIComponent(text)}`;

    const res = await axios.get(link);

    const reply = Array.isArray(res.data.response)
      ? res.data.response[0]
      : res.data.response;

    if (!global.client.handleReply) global.client.handleReply = [];

    return api.sendMessage(
      reply,
      event.threadID,
      (err, info) => {
        global.client.handleReply.push({
          name: module.exports.config.name,
          messageID: info.messageID,
          author: event.senderID,
          type: "sahu"
        });
      },
      event.messageID
    );

  } catch {
    return api.sendMessage("🙂 একটু পরে আবার বলো", event.threadID, event.messageID);
  }
};

module.exports.run = async function ({ api, event }) {
  return module.exports.handleEvent({ api, event });
};
