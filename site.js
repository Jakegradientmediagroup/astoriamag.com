// Astoria shared site script
var ARTICLES_INDEX = [{"id": "morning-ritual", "cat": "Wellness &middot; Featured", "title": "The Morning Ritual That Transforms Your Entire Day", "meta": "By Claire Ashworth &middot; 8 min read &middot; Wellness &amp; Body", "img": "/images/morning-ritual.jpg", "excerpt": "From sunrise pilates to intentional prayer &mdash; how the most grounded women structure their mornings before the world asks anything of them."}, {"id": "pilates", "cat": "Yoga &amp; Movement", "title": "Why Every Woman Over 30 Is Quietly Obsessed with Pilates Right Now", "meta": "By Claire Ashworth &middot; 6 min read &middot; Wellness &amp; Body", "img": "/images/pilates.jpg", "excerpt": "It&#39;s not just a workout. It&#39;s a full reset &mdash; for your body, your posture, and honestly, your entire relationship with yourself."}, {"id": "goop", "cat": "Clean Living", "title": "We Tried Goop's Wellness Protocols for 30 Days. Here's What Actually Happened", "meta": "By Maren Ellis &middot; 5 min read &middot; Wellness &amp; Body", "img": "/images/goop.jpg", "excerpt": "Some of it is noise. But some of it genuinely changed things. An honest report from someone who went in skeptical."}, {"id": "anti-inflammatory", "cat": "Mind &amp; Wellbeing", "title": "Eating for Calm: How an Anti-Inflammatory Diet Supports Your Hormones and the Way You Age", "meta": "By Astoria Editors &middot; 8 min read &middot; Wellness &amp; Body", "img": "/images/eating-calm.jpg", "excerpt": "What the science actually says &mdash; and what it doesn&#39;t &mdash; about food, inflammation, and feeling like yourself through your forties and beyond."}, {"id": "year-five", "cat": "Marriage", "title": "The Conversations Every Couple Needs to Have Before Year Five", "meta": "By Priya Holloway &middot; 6 min read &middot; Relationships &amp; Marriage", "img": "/images/year-five.jpg", "excerpt": "A marriage therapist shares the five questions most couples never ask &mdash; until it&#39;s too late to answer them honestly."}, {"id": "standards", "cat": "Dating &amp; Intention", "title": "Dating with Standards: What High-Value Women Know That Others Don't", "meta": "By Lena Forrest &middot; 5 min read &middot; Relationships &amp; Marriage", "img": "/images/standards.jpg", "excerpt": "Moving past the idea that having standards is &ldquo;too much.&rdquo; What it actually means to know your worth &mdash; and hold it."}, {"id": "daughters", "cat": "Family Life", "title": "Raising Confident Daughters in an Age That Wants to Confuse Them", "meta": "By Kate Brennan &middot; 6 min read &middot; Relationships &amp; Marriage", "img": "/images/daughters.jpg", "excerpt": "Clarity, conviction, and the conversations worth having young &mdash; for mothers who want to pass something real down."}, {"id": "neighborhoods", "cat": "Market Report", "title": "The Neighborhoods Women Are Quietly Flocking To in 2025", "meta": "By Astoria Editors &middot; 6 min read &middot; Real Estate &amp; Home", "img": "/images/neighborhoods.jpg", "excerpt": "Where the schools are exceptional, the community is tight-knit, and the values align. Top markets for intentional buyers."}, {"id": "quiet-luxury-home", "cat": "Interior Design", "title": "The New Quiet Luxury Home: Build a Space That Actually Restores You", "meta": "By Isabelle Clarke &middot; 5 min read &middot; Real Estate &amp; Home", "img": "/images/quiet-luxury-home.jpg", "excerpt": "Not just aesthetics &mdash; the architecture of calm. How intentional design shapes your nervous system and your daily rhythms."}, {"id": "realtor-questions", "cat": "Investing", "title": "First Home or Fifth: The Questions Every Smart Woman Asks Her Realtor", "meta": "By Dana Whitmore &middot; 5 min read &middot; Real Estate &amp; Home", "img": "/images/realtor-questions.jpg", "excerpt": "What to demand from your realtor, your inspector, and your own due diligence before you sign anything."}, {"id": "christian-events", "cat": "Christian Life", "title": "The Summer Events Redefining What Christian Community Looks Like", "meta": "By Rachel Monroe &middot; 5 min read &middot; Faith &amp; Community", "img": "/images/christian-events.jpg", "excerpt": "From retreats in Aspen to intimate dinners in Nashville &mdash; the gatherings where faith meets the fullness of life."}, {"id": "sabbath", "cat": "Intentional Living", "title": "On Sabbath, Silence, and the Radical Act of Resting Well", "meta": "By Anna Collins &middot; 5 min read &middot; Faith &amp; Community", "img": "/images/sabbath.jpg", "excerpt": "What happens when high-achieving women stop performing productivity and start practicing actual rest."}, {"id": "social-circle", "cat": "Social Life", "title": "How to Build a Social Circle That Actually Nourishes You", "meta": "By Leigh Donovan &middot; 5 min read &middot; Faith &amp; Community", "img": "/images/social-circle.jpg", "excerpt": "Moving past performative friendships toward something richer &mdash; women creating communities rooted in shared conviction."}, {"id": "dressing-with-intention", "cat": "Personal Style", "title": "The Case for Dressing Like You Have Somewhere to Be (Even When You Don't)", "meta": "By Margot Sinclair &middot; 10 min read &middot; Style &amp; Beauty", "img": "/images/dressing-with-intention.jpg", "excerpt": "An unpopular opinion about the death of getting dressed &mdash; and why the women who never stopped trying are quietly winning."}, {"id": "beauty-without-obsession", "cat": "Beauty Philosophy", "title": "Nobody Wants to Say This About Beauty Routines Anymore, So We Will", "meta": "By Nora Whitfield &middot; 10 min read &middot; Style &amp; Beauty", "img": "/images/beauty-without-obsession.jpg", "excerpt": "The 14-step routine was never about your skin. A case for beauty as discipline, not anxiety management."}, {"id": "turmeric-salmon", "cat": "Recipes", "title": "One-Pan Turmeric Salmon with Broccoli &amp; Sweet Potato", "meta": "By Astoria Editors &middot; 5 min read &middot; Wellness &amp; Body", "img": "/images/turmeric-salmon.jpg", "excerpt": "Just 8 ingredients, 4 simple steps &mdash; everything roasts together on one sheet pan for an anti-inflammatory weeknight dinner that doesn&#39;t skimp on flavor."}];
var RELATED_MAP = {"morning-ritual": ["pilates", "sabbath", "anti-inflammatory"], "pilates": ["morning-ritual", "anti-inflammatory", "goop"], "goop": ["anti-inflammatory", "pilates", "quiet-luxury-home"], "anti-inflammatory": ["goop", "morning-ritual", "turmeric-salmon"], "year-five": ["standards", "daughters", "sabbath"], "standards": ["year-five", "daughters", "social-circle"], "daughters": ["standards", "year-five", "sabbath"], "neighborhoods": ["quiet-luxury-home", "realtor-questions", "christian-events"], "quiet-luxury-home": ["neighborhoods", "realtor-questions", "sabbath"], "realtor-questions": ["neighborhoods", "quiet-luxury-home", "standards"], "christian-events": ["sabbath", "social-circle", "neighborhoods"], "sabbath": ["christian-events", "social-circle", "morning-ritual"], "social-circle": ["christian-events", "sabbath", "standards"], "dressing-with-intention": ["morning-ritual", "quiet-luxury-home", "standards"], "beauty-without-obsession": ["anti-inflammatory", "goop", "sabbath"], "turmeric-salmon": ["anti-inflammatory", "goop", "morning-ritual"]};
var ARTICLES_BY_ID = {};
ARTICLES_INDEX.forEach(function(a){ARTICLES_BY_ID[a.id]=a;});

function toggleMobileMenu(){
  var m=document.getElementById('mobileMenu');
  if(m) m.classList.toggle('open');
}
function closeMobileMenu(){
  var m=document.getElementById('mobileMenu');
  if(m) m.classList.remove('open');
}
function toggleSearch(){
  var p=document.getElementById('searchPanel');
  if(!p) return;
  p.classList.toggle('open');
  if(p.classList.contains('open')){
    document.getElementById('searchInput').value='';
    document.getElementById('searchResults').innerHTML='';
    setTimeout(function(){document.getElementById('searchInput').focus();},50);
  }
}
function performSearch(){
  var q=document.getElementById('searchInput').value.trim().toLowerCase();
  var box=document.getElementById('searchResults');
  if(!q){box.innerHTML='';return;}
  var matches=ARTICLES_INDEX.filter(function(a){
    return a.title.toLowerCase().indexOf(q)>-1 || a.cat.toLowerCase().indexOf(q)>-1 || a.meta.toLowerCase().indexOf(q)>-1;
  });
  if(matches.length===0){
    box.innerHTML='<div class="search-empty">No articles found for &ldquo;'+q+'&rdquo;.</div>';
    return;
  }
  box.innerHTML=matches.map(function(a){
    var imgHtml = a.img ? '<img src="'+a.img+'" alt="'+a.title.replace(/"/g,'&quot;')+'">' : '';
    var imgClass = a.img ? '' : ' '+a.placeholderClass;
    var imgContent = a.img ? imgHtml : a.placeholderIcon;
    return '<a class="search-result-row" href="/articles/'+a.id+'/"><div class="search-result-img'+imgClass+'">'+imgContent+'</div><div><div class="search-result-text-cat">'+a.cat+'</div><div class="search-result-text-title">'+a.title+'</div></div></a>';
  }).join('');
}
var topicMap={
  "Wellness & Body":["morning-ritual","pilates","goop","anti-inflammatory","turmeric-salmon"],
  "Relationships":["year-five","standards","daughters"],
  "Real Estate":["neighborhoods","quiet-luxury-home","realtor-questions"],
  "Faith & Community":["christian-events","sabbath","social-circle"],
  "Style & Beauty":["dressing-with-intention","beauty-without-obsession"],
  "Mind & Spirit":["anti-inflammatory","sabbath","morning-ritual"],
  "Home & Design":["quiet-luxury-home","neighborhoods","realtor-questions"],
  "Motherhood":["daughters","morning-ritual"]
};
var popularFallback=["morning-ritual","pilates","quiet-luxury-home"];
function articleCardHtml(id){
  var a=ARTICLES_BY_ID[id];
  if(!a) return '';
  var imgBlock = a.img
    ? '<img src="'+a.img+'" alt="'+a.title.replace(/"/g,'&quot;')+'">'
    : a.placeholderIcon;
  var imgClass = a.img ? '' : ' '+a.placeholderClass;
  return '<a class="article-card" href="/articles/'+id+'/"><div class="article-card-img'+imgClass+'">'+imgBlock+'</div><div class="article-cat">'+a.cat+'</div><h3 class="article-title">'+a.title+'</h3><p class="article-excerpt">'+a.excerpt+'</p><div class="article-meta">'+a.meta+'</div></a>';
}
function openTopic(label){
  var overlay=document.getElementById('topicOverlay');
  if(!overlay) return;
  if(label==='All'){closeTopic();window.scrollTo({top:0,behavior:'smooth'});return;}
  var ids=topicMap[label]||[];
  var html='<div class="topic-page-header"><h1 class="topic-page-title"><em>'+label+'</em></h1><div class="topic-page-count">'+(ids.length)+' '+(ids.length===1?'Article':'Articles')+'</div></div>';
  if(ids.length===0){
    html+='<div class="topic-empty-note"><strong>New '+label+' stories are on their way.</strong><br>Check back soon &mdash; in the meantime, here&#39;s what readers are loving right now.</div>';
    html+='<div class="article-grid">'+popularFallback.map(articleCardHtml).join('')+'</div>';
  } else {
    html+='<div class="article-grid">'+ids.map(articleCardHtml).join('')+'</div>';
  }
  document.getElementById('topicContent').innerHTML=html;
  overlay.classList.add('open');
  overlay.scrollTop=0;
  document.body.style.overflow='hidden';
  closeMobileMenu();
}
function closeTopic(){
  var overlay=document.getElementById('topicOverlay');
  if(!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow='';
}
function copyShareLink(btn){
  navigator.clipboard.writeText(window.location.href).then(function(){
    var note = btn.parentElement.querySelector('.share-copied');
    if(note){
      note.classList.add('show');
      setTimeout(function(){note.classList.remove('show');}, 2000);
    }
  });
}
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.topic-pill').forEach(function(p){
    p.addEventListener('click',function(){
      document.querySelectorAll('.topic-pill').forEach(function(x){x.classList.remove('active');});
      this.classList.add('active');
      openTopic(this.textContent.trim());
    });
  });
  var waitlistForm=document.getElementById('waitlistForm');
  if(waitlistForm){
    waitlistForm.addEventListener('submit',function(){
      var btn=waitlistForm.querySelector('.newsletter-btn');
      if(btn){btn.disabled=true;btn.textContent='Submitting...';}
      setTimeout(function(){
        var success=document.getElementById('newsletterSuccess');
        if(success) success.style.display='block';
        waitlistForm.style.display='none';
      },700);
    });
  }
});
