// Astoria shared site script
var ARTICLES_INDEX = [{"id": "morning-ritual", "cat": "Wellness &middot; Featured", "title": "I Used to Hit Snooze Five Times. Here's What Actually Fixed My Mornings", "meta": "By Claire Ashworth &middot; 8 min read &middot; Wellness &amp; Body", "img": "/images/morning-ritual.jpg", "excerpt": "From sunrise pilates to intentional prayer &mdash; how the most grounded women structure their mornings before the world asks anything of them."}, {"id": "pilates", "cat": "Yoga &amp; Movement", "title": "Why Every Woman Over 30 Is Quietly Obsessed with Pilates Right Now", "meta": "By Claire Ashworth &middot; 6 min read &middot; Wellness &amp; Body", "img": "/images/pilates.jpg", "excerpt": "It&#39;s not just a workout. It&#39;s a full reset &mdash; for your body, your posture, and honestly, your entire relationship with yourself."}, {"id": "goop", "cat": "Clean Living", "title": "We Tried Goop's Wellness Protocols for 30 Days. Here's What Actually Happened", "meta": "By Maren Ellis &middot; 5 min read &middot; Wellness &amp; Body", "img": "/images/goop.jpg", "excerpt": "Some of it is noise. But some of it genuinely changed things. An honest report from someone who went in skeptical."}, {"id": "anti-inflammatory", "cat": "Mind &amp; Wellbeing", "title": "Nobody Told Me My Diet Was Aging Me Faster Than It Should", "meta": "By Astoria Editors &middot; 8 min read &middot; Wellness &amp; Body", "img": "/images/eating-calm.jpg", "excerpt": "What the science actually says &mdash; and what it doesn&#39;t &mdash; about food, inflammation, and feeling like yourself through your forties and beyond."}, {"id": "year-five", "cat": "Marriage", "title": "The Conversation We Almost Didn't Have Before Our Fifth Anniversary &mdash; And Almost Ended Our Marriage", "meta": "By Priya Holloway &middot; 6 min read &middot; Relationships &amp; Marriage", "img": "/images/year-five.jpg", "excerpt": "A marriage therapist shares the five questions most couples never ask &mdash; until it&#39;s too late to answer them honestly."}, {"id": "standards", "cat": "Dating &amp; Intention", "title": "I Was Called &ldquo;Too Picky&rdquo; for Years. Then I Got Exactly What I Wanted", "meta": "By Lena Forrest &middot; 5 min read &middot; Relationships &amp; Marriage", "img": "/images/standards.jpg", "excerpt": "Moving past the idea that having standards is &ldquo;too much.&rdquo; What it actually means to know your worth &mdash; and hold it."}, {"id": "daughters", "cat": "Family Life", "title": "My Daughter Asked Me Why Her Body Was &ldquo;Wrong.&rdquo; Here's What I Said", "meta": "By Kate Brennan &middot; 6 min read &middot; Relationships &amp; Marriage", "img": "/images/daughters.jpg", "excerpt": "Clarity, conviction, and the conversations worth having young &mdash; for mothers who want to pass something real down."}, {"id": "neighborhoods", "cat": "Market Report", "title": "I Moved My Family Across the Country for &ldquo;Better Schools.&rdquo; Was It Worth It?", "meta": "By Astoria Editors &middot; 6 min read &middot; Real Estate &amp; Home", "img": "/images/neighborhoods.jpg", "excerpt": "Where the schools are exceptional, the community is tight-knit, and the values align. Top markets for intentional buyers."}, {"id": "quiet-luxury-home", "cat": "Interior Design", "title": "I Spent Way Too Much Making My Home &ldquo;Quiet Luxury.&rdquo; Here's What Was Actually Worth It", "meta": "By Isabelle Clarke &middot; 5 min read &middot; Real Estate &amp; Home", "img": "/images/quiet-luxury-home.jpg", "excerpt": "Not just aesthetics &mdash; the architecture of calm. How intentional design shapes your nervous system and your daily rhythms."}, {"id": "realtor-questions", "cat": "Investing", "title": "First Home or Fifth: The Questions Every Smart Woman Asks Her Realtor", "meta": "By Dana Whitmore &middot; 5 min read &middot; Real Estate &amp; Home", "img": "/images/realtor-questions.jpg", "excerpt": "What to demand from your realtor, your inspector, and your own due diligence before you sign anything."}, {"id": "christian-events", "cat": "Christian Life", "title": "I Was Tired of Fake Church Friendships. Then I Found This", "meta": "By Rachel Monroe &middot; 5 min read &middot; Faith &amp; Community", "img": "/images/christian-events.jpg", "excerpt": "From retreats in Aspen to intimate dinners in Nashville &mdash; the gatherings where faith meets the fullness of life."}, {"id": "sabbath", "cat": "Intentional Living", "title": "I Didn't Answer a Single Text for 24 Hours. Here's What It Did to My Marriage and My Mind", "meta": "By Anna Collins &middot; 5 min read &middot; Faith &amp; Community", "img": "/images/sabbath.jpg", "excerpt": "What happens when high-achieving women stop performing productivity and start practicing actual rest."}, {"id": "social-circle", "cat": "Social Life", "title": "I Was 34 With No Real Friends. Here's How I Fixed It", "meta": "By Leigh Donovan &middot; 5 min read &middot; Faith &amp; Community", "img": "/images/social-circle.jpg", "excerpt": "Moving past performative friendships toward something richer &mdash; women creating communities rooted in shared conviction."}, {"id": "dressing-with-intention", "cat": "Personal Style", "title": "The Case for Dressing Like You Have Somewhere to Be (Even When You Don't)", "meta": "By Margot Sinclair &middot; 10 min read &middot; Style &amp; Beauty", "img": "/images/dressing-with-intention.jpg", "excerpt": "An unpopular opinion about the death of getting dressed &mdash; and why the women who never stopped trying are quietly winning."}, {"id": "beauty-without-obsession", "cat": "Beauty Philosophy", "title": "Nobody Wants to Say This About Beauty Routines Anymore, So We Will", "meta": "By Nora Whitfield &middot; 10 min read &middot; Style &amp; Beauty", "img": "/images/beauty-without-obsession.jpg", "excerpt": "The 14-step routine was never about your skin. A case for beauty as discipline, not anxiety management."}, {"id": "turmeric-salmon", "cat": "Recipes", "title": "One-Pan Turmeric Salmon with Broccoli &amp; Sweet Potato", "meta": "By Astoria Editors &middot; 5 min read &middot; Wellness &amp; Body", "img": "/images/turmeric-salmon.jpg", "excerpt": "Just 8 ingredients, 4 simple steps &mdash; everything roasts together on one sheet pan for an anti-inflammatory weeknight dinner that doesn&#39;t skimp on flavor."}, {"id": "unanswered-prayer", "cat": "Mind & Spirit", "title": "I Prayed the Same Prayer for Three Years Before I Understood Why It Wasn't Being Answered", "meta": "By Renata Fields &middot; 11 min read &middot; Mind &amp; Spirit", "img": "/images/unanswered-prayer.png", "excerpt": "For three years I asked God for the same specific thing, in the same specific words, and got nothing. What I eventually understood wasn't about faith. It was about what I'd actually been asking for."}, {"id": "quiet-faith", "cat": "Mind & Spirit", "title": "I Kept Waiting to Feel God the Way Everyone Else Seemed To. Then I Learned I'd Been Looking in the Wrong Place", "meta": "By Renata Fields &middot; 9 min read &middot; Mind &amp; Spirit", "img": "/images/quiet-faith.png", "excerpt": "Everyone around me described faith as a feeling &mdash; goosebumps, certainty, a voice. I never had that. For years I thought it meant something was wrong with me."}, {"id": "kitchen-renovation-regret", "cat": "Home &amp; Design", "title": "I Renovated My Kitchen Twice Trying to Make It &ldquo;Instagram-Worthy.&rdquo; The Third Time, I Finally Got It Right", "meta": "By Isabelle Clarke &middot; 8 min read &middot; Home &amp; Design", "img": "/images/kitchen-renovation-regret.png", "excerpt": "Two renovations, two rounds of regret, and one very expensive lesson about who a kitchen is actually supposed to be for."}, {"id": "husband-sell-house", "cat": "Home &amp; Design", "title": "My Husband Wanted to Sell the House I'd Finally Fallen in Love With. Here's the Conversation That Changed His Mind", "meta": "By Isabelle Clarke &middot; 8 min read &middot; Home &amp; Design", "img": "/images/husband-sell-house.png", "excerpt": "A financial argument about a house was never really about the house. It was about two very different definitions of what a home is supposed to do for a family."}, {"id": "too-much-daughter", "cat": "Motherhood", "title": "My Daughter Told Me I Was &ldquo;Too Much&rdquo; and It Broke Something Open I Didn't Expect", "meta": "By Kate Brennan &middot; 6 min read &middot; Motherhood", "img": "/images/too-much-daughter.png", "excerpt": "My twelve-year-old used the exact phrase I'd spent my whole life being told about myself. I had to sit with where she actually learned it."}, {"id": "stopped-being-friend", "cat": "Motherhood", "title": "I Stopped Trying to Be My Kids' Friend and Became a Better Mother Because of It", "meta": "By Kate Brennan &middot; 7 min read &middot; Motherhood", "img": "/images/stopped-being-friend.png", "excerpt": "For years I confused being liked with being a good parent. The moment I let go of one, I finally got closer to the other."}, {"id": "anxiety-faith-problem", "cat": "Mind &amp; Spirit", "title": "I Thought My Anxiety Meant I Didn't Trust God Enough. A Therapist Finally Corrected Me", "meta": "By Renata Fields &middot; 5 min read &middot; Mind &amp; Spirit", "img": "/images/anxiety-faith-problem.png", "excerpt": "For years I treated every anxious thought as a spiritual failure. It took a therapist, not a pastor, to show me why that belief was making everything worse."}, {"id": "mother-in-law-redecorated", "cat": "Home &amp; Design", "title": "My Mother-in-Law Rearranged My Entire Living Room While We Were on Vacation. I Almost Didn't Say Anything.", "meta": "By Isabelle Clarke &middot; 5 min read &middot; Home &amp; Design", "img": "/images/mother-in-law-redecorated.png", "excerpt": "She meant well. That almost made it harder to say the sentence I finally had to say out loud."}, {"id": "stopped-posting-kids", "cat": "Motherhood", "title": "I Stopped Posting My Kids on Social Media and It Changed My Relationship With Motherhood Itself", "meta": "By Kate Brennan &middot; 5 min read &middot; Motherhood", "img": "/images/stopped-posting-kids.png", "excerpt": "I thought I was protecting their privacy. I didn't expect it to change how I actually experienced being their mother."}, {"id": "prim-pillow-review", "cat": "Marriage &amp; Intimacy", "title": "The $195 Pillow That Might Be the Most Underrated Marriage Investment We've Ever Made", "meta": "By Priya Holloway &middot; 7 min read &middot; Relationships &amp; Marriage", "img": "/images/prim-pillow-review.png", "excerpt": "We've spent thousands on date nights, counseling, and marriage retreats over the years. The thing that's actually changed our intimacy the most cost less than a nice dinner out."}, {"id": "sex-calendar", "cat": "Marriage &amp; Intimacy", "title": "I Put Sex on the Calendar Every Week for 30 Days. My Husband Thought It Was a Joke.", "meta": "By Priya Holloway &middot; 7 min read &middot; Marriage &amp; Intimacy", "img": "/images/sex-calendar.png", "excerpt": "Everything I assumed about scheduled intimacy was wrong. So was he."}];
var RELATED_MAP = {"morning-ritual": ["pilates", "sabbath", "anti-inflammatory"], "pilates": ["morning-ritual", "anti-inflammatory", "goop"], "goop": ["anti-inflammatory", "pilates", "quiet-luxury-home"], "anti-inflammatory": ["goop", "morning-ritual", "turmeric-salmon"], "year-five": ["standards", "daughters", "sabbath"], "standards": ["year-five", "daughters", "social-circle"], "daughters": ["standards", "year-five", "sabbath"], "neighborhoods": ["quiet-luxury-home", "realtor-questions", "christian-events"], "quiet-luxury-home": ["neighborhoods", "realtor-questions", "sabbath"], "realtor-questions": ["neighborhoods", "quiet-luxury-home", "standards"], "christian-events": ["sabbath", "social-circle", "neighborhoods"], "sabbath": ["christian-events", "social-circle", "morning-ritual"], "social-circle": ["christian-events", "sabbath", "standards"], "dressing-with-intention": ["morning-ritual", "quiet-luxury-home", "standards"], "beauty-without-obsession": ["anti-inflammatory", "goop", "sabbath"], "turmeric-salmon": ["anti-inflammatory", "goop", "morning-ritual"], "unanswered-prayer": ["sabbath", "christian-events", "morning-ritual"], "quiet-faith": ["sabbath", "social-circle", "christian-events"], "kitchen-renovation-regret": ["quiet-luxury-home", "neighborhoods", "realtor-questions"], "husband-sell-house": ["realtor-questions", "quiet-luxury-home", "year-five"], "too-much-daughter": ["daughters", "standards", "social-circle"], "stopped-being-friend": ["daughters", "morning-ritual", "sabbath"], "anxiety-faith-problem": ["unanswered-prayer", "quiet-faith", "sabbath"], "mother-in-law-redecorated": ["kitchen-renovation-regret", "husband-sell-house", "quiet-luxury-home"], "stopped-posting-kids": ["too-much-daughter", "stopped-being-friend", "daughters"]};
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
    var imgHtml = a.img ? '<img src="'+a.img+'" style="width:100%;height:100%;object-fit:cover;display:block;" alt="'+a.title.replace(/"/g,'&quot;')+'">' : '';
    var imgClass = a.img ? '' : ' '+a.placeholderClass;
    var imgContent = a.img ? imgHtml : a.placeholderIcon;
    return '<a class="search-result-row" href="/articles/'+a.id+'/"><div class="search-result-img'+imgClass+'">'+imgContent+'</div><div><div class="search-result-text-cat">'+a.cat+'</div><div class="search-result-text-title">'+a.title+'</div></div></a>';
  }).join('');
}
var topicMap={
  "Wellness & Body":["morning-ritual","pilates","goop","anti-inflammatory","turmeric-salmon"],
  "Relationships":["year-five","standards","daughters","prim-pillow-review","sex-calendar"],
  "Real Estate":["neighborhoods","quiet-luxury-home","realtor-questions"],
  "Faith & Community":["christian-events","sabbath","social-circle"],
  "Style & Beauty":["dressing-with-intention","beauty-without-obsession"],
  "Mind & Spirit":["unanswered-prayer","quiet-faith","anxiety-faith-problem"],
  "Home & Design":["kitchen-renovation-regret","husband-sell-house","mother-in-law-redecorated"],
  "Motherhood":["too-much-daughter","stopped-being-friend","stopped-posting-kids"]
};
var popularFallback=["morning-ritual","pilates","quiet-luxury-home"];
function articleCardHtml(id){
  var a=ARTICLES_BY_ID[id];
  if(!a) return '';
  var imgBlock = a.img
    ? '<img src="'+a.img+'" style="width:100%;height:100%;object-fit:cover;display:block;" alt="'+a.title.replace(/"/g,'&quot;')+'">'
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
function rotateHero(){
  var card = document.getElementById('heroFeaturedCard');
  if(!card) return;
  var dayIndex = Math.floor(Date.now() / 86400000);
  var pick = ARTICLES_INDEX[dayIndex % ARTICLES_INDEX.length];
  if(!pick) return;
  var href = '/articles/' + pick.id + '/';
  card.setAttribute('href', href);
  var cta = document.getElementById('heroCta');
  if(cta) cta.setAttribute('href', href);
  var img = document.getElementById('heroCardImg');
  if(img && pick.img){
    img.setAttribute('src', pick.img);
    img.setAttribute('alt', pick.title.replace(/<[^>]+>/g,''));
  }
  var catEl = document.getElementById('heroCardCat');
  if(catEl) catEl.innerHTML = 'Featured &middot; ' + pick.cat;
  var titleEl = document.getElementById('heroCardTitle');
  if(titleEl) titleEl.innerHTML = pick.title;
  var excerptEl = document.getElementById('heroCardExcerpt');
  if(excerptEl) excerptEl.innerHTML = pick.excerpt;
}
function handleNavScroll(){
  var navEl = document.querySelector('nav');
  if(!navEl) return;
  if(window.scrollY > 40){
    navEl.classList.add('nav-scrolled');
  } else {
    navEl.classList.remove('nav-scrolled');
  }
}
document.addEventListener('DOMContentLoaded', function(){
  handleNavScroll();
  window.addEventListener('scroll', handleNavScroll);
  rotateHero();
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
