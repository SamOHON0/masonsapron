// ===== SHARED FOOTER ===== //
const footerHTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="logo">
          <span class="logo-mark">M</span>
          Mason's Apron
        </div>
        <p class="tagline">A family-run bakery, café and restaurant on Main Street, Virginia, Co. Cavan. Home-baked, home-cooked, warmly served.</p>
        <div class="socials">
          <a href="https://www.facebook.com/themasonsapron/" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
          </a>
          <!-- TODO: Add Instagram URL if business has one -->
          <a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <!-- TODO: Add Google Business Profile URL -->
          <a href="https://www.google.com/search?q=Mason%27s+Apron+Virginia+Cavan" target="_blank" rel="noopener" aria-label="Google">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
          </a>
        </div>
      </div>
      <div>
        <h4>Visit</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu.html">Menu</a></li>
          <li><a href="/catering.html">Catering</a></li>
          <li><a href="/about.html">About</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4>Find Us</h4>
        <ul>
          <li>Main Street</li>
          <li>Virginia</li>
          <li>Co. Cavan</li>
          <li>A82 T3K0</li>
        </ul>
      </div>
      <div>
        <h4>Get in Touch</h4>
        <ul>
          <li><a href="tel:+353498547888">049 854 7888</a></li>
          <li><a href="https://www.facebook.com/themasonsapron/" target="_blank" rel="noopener">Message on Facebook</a></li>
          <li><a href="/contact.html">Contact form</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© <span id="year"></span> Mason's Apron. All rights reserved.</div>
      <div>Website by <a href="https://squaretwo.ie" target="_blank" rel="noopener" style="color: var(--butter);">Square Two</a></div>
    </div>
  </div>
</footer>
`;

// ===== WHATSAPP + CHATBOT WIDGETS ===== //
const widgetsHTML = `
<a href="https://wa.me/353498547888?text=Hi!%20I%20found%20you%20online%20and%20I%27d%20like%20to%20enquire%20about%20Mason%27s%20Apron."
   target="_blank" rel="noopener" class="whatsapp-float" aria-label="Chat on WhatsApp">
  <span class="wa-tooltip">WhatsApp us</span>
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
</a>

<button class="chat-button" id="chatBtn" aria-label="Open chat">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  <span class="chat-badge">1</span>
</button>

<div class="chat-window" id="chatWin">
  <div class="chat-header">
    <div class="chat-header-info">
      <div class="chat-avatar">M</div>
      <div>
        <div class="chat-name">Mason's Apron</div>
        <div class="chat-status">Online</div>
      </div>
    </div>
    <button class="chat-close" id="chatClose" aria-label="Close chat">×</button>
  </div>
  <div class="chat-body" id="chatBody">
    <div class="msg bot">Hi there! Welcome to Mason's Apron. How can we help you today?</div>
  </div>
  <div class="quick-replies" id="quickReplies">
    <button class="chip" data-msg="What are your opening hours?">Opening hours</button>
    <button class="chip" data-msg="Do you cater for allergies?">Allergies</button>
    <button class="chip" data-msg="Can I order a celebration cake?">Order a cake</button>
    <button class="chip" data-msg="Where are you located?">Where are you?</button>
  </div>
  <div class="chat-footer">
    <input class="chat-input" id="chatInput" type="text" placeholder="Type a message...">
    <button class="chat-send" id="chatSend" aria-label="Send">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
    </button>
  </div>
  <div class="chat-handoff">
    <a href="https://wa.me/353498547888?text=Hi!%20I%20was%20chatting%20on%20your%20website%20and%20wanted%20to%20continue%20here." target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
      Continue on WhatsApp
    </a>
  </div>
</div>
`;

// Inject footer + widgets where placeholders are
document.getElementById('footer-placeholder')?.insertAdjacentHTML('afterend', footerHTML);
document.getElementById('widgets-placeholder')?.insertAdjacentHTML('afterend', widgetsHTML);

// Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// Hamburger
const hamb = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamb && navLinks) {
  hamb.addEventListener('click', () => {
    hamb.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  document.querySelectorAll('#navLinks a').forEach(a => {
    a.addEventListener('click', () => {
      hamb.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// FAQ toggle
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  if (q) q.addEventListener('click', () => item.classList.toggle('open'));
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

// Chatbot
const chatBtn = document.getElementById('chatBtn');
const chatWin = document.getElementById('chatWin');
const chatClose = document.getElementById('chatClose');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const quickReplies = document.getElementById('quickReplies');

if (chatBtn) {
  chatBtn.addEventListener('click', () => {
    chatWin.classList.add('active');
    const badge = chatBtn.querySelector('.chat-badge');
    if (badge) badge.style.display = 'none';
  });
}
if (chatClose) chatClose.addEventListener('click', () => chatWin.classList.remove('active'));

const KB = [
  {
    keys: ['hour', 'open', 'close', 'when', 'time', 'today'],
    reply: "We're typically open Mon-Fri 8:30am-5pm, Sat 9am-5pm and Sun 10am-4pm. To double-check hours on a specific day give us a ring on 049 854 7888."
  },
  {
    keys: ['where', 'location', 'address', 'find', 'direction', 'parking'],
    reply: "We're on Main Street, Virginia, Co. Cavan, A82 T3K0. A handy stop on the N3 between Dublin and Cavan town. Parking is easy on the street."
  },
  {
    keys: ['allerg', 'gluten', 'dairy', 'vegan', 'vegetarian', 'celiac', 'coeliac', 'diet'],
    reply: "Yes, we cater for allergies and dietary needs every day. Just let our team know what you need when you order and they'll guide you through the menu."
  },
  {
    keys: ['cake', 'birthday', 'celebration', 'wedding', 'occasion'],
    reply: "We bake celebration and birthday cakes to order. Give us 2-3 days notice ideally. Ring 049 854 7888 or fill in the contact form with what you have in mind."
  },
  {
    keys: ['cater', 'event', 'function', 'communion', 'christening', 'funeral', 'office'],
    reply: "Yes, we cater for events from family gatherings to office functions. See the Catering page for platters and packages, or ring 049 854 7888 to talk it through."
  },
  {
    keys: ['takeaway', 'take away', 'take-away', 'to go', 'collection', 'collect'],
    reply: "Yes. Bakery items are always available to take home, and most of our food menu can be ordered to go. Phone ahead on 049 854 7888 for larger orders."
  },
  {
    keys: ['book', 'reserv', 'table', 'group', 'large'],
    reply: "Walk-ins are grand. For groups of 6 or more give us a ring on 049 854 7888 and we'll hold a table for you."
  },
  {
    keys: ['menu', 'food', 'breakfast', 'lunch', 'soup', 'sandwich', 'serve', 'eat'],
    reply: "Bakery items, daily soup, sandwiches, hot lunches, cakes and proper coffee. The full menu is on the Menu page, or call us for today's specials on 049 854 7888."
  },
  {
    keys: ['price', 'cost', 'how much', 'expensive'],
    reply: "We're a casual café so prices are reasonable. Mains are around the standard café range. For catering or cake quotes, ring us on 049 854 7888 with what you're after."
  },
  {
    keys: ['delivery', 'deliver', 'uber', 'just eat', 'deliveroo'],
    reply: "We don't currently do delivery, but takeaway and collection are no problem. Just ring ahead on 049 854 7888."
  }
];

function botReply(text) {
  const lc = text.toLowerCase();
  for (const item of KB) {
    if (item.keys.some(k => lc.includes(k))) return item.reply;
  }
  return "Thanks for your message! For a quicker reply, give us a ring on 049 854 7888 or hit the WhatsApp button below and our team will get back to you.";
}

function addMsg(text, who) {
  const div = document.createElement('div');
  div.className = 'msg ' + who;
  div.textContent = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function sendMsg(text) {
  const t = text.trim();
  if (!t) return;
  addMsg(t, 'user');
  chatInput.value = '';
  if (quickReplies) quickReplies.style.display = 'none';
  setTimeout(() => addMsg(botReply(t), 'bot'), 450);
}

if (chatSend) chatSend.addEventListener('click', () => sendMsg(chatInput.value));
if (chatInput) chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMsg(chatInput.value); });
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => sendMsg(chip.dataset.msg));
});
