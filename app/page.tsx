"use client";

import { useState } from "react";
import {
  ArrowRight, Play, Search, Bell, Home, Sparkles, Target, Wallet,
  TrendingUp, ShieldCheck, ChevronRight, Menu, X, Check
} from "lucide-react";

const features = [
  { icon: Wallet, title:"Understand your money", text:"See spending, savings and investments in one clear picture.", tone:"green" },
  { icon: Target, title:"Take action", text:"Set goals, track progress and turn intentions into simple next steps.", tone:"rose" },
  { icon: Sparkles, title:"Build better habits", text:"Make smarter financial decisions with practical insights.", tone:"blue" },
  { icon: TrendingUp, title:"Grow financially", text:"Plan for your future with confidence and stay on track.", tone:"gold" },
];

const transactions = [
  ["Z", "Zomato", "Food & Dining", "−₹320"],
  ["A", "Amazon", "Shopping", "−₹1,299"],
  ["S", "Salary", "Income", "+₹60,000"],
];

export default function HomePage() {
  const [menu, setMenu] = useState(false);

  return (
    <main>
      <header className="fixed top-0 z-50 w-full px-4 py-4 md:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/5 bg-white/75 px-5 py-3 shadow-sm backdrop-blur-xl">
          <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <span className="grid h-7 w-7 place-items-center rounded-[9px] bg-fern text-white">
              <span className="h-3.5 w-3.5 rounded-br-[9px] rounded-tl-[9px] bg-white/90" />
            </span>
            Fermor
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#product" className="hover:text-fern">Product</a>
            <a href="#features" className="hover:text-fern">Features</a>
            <a href="#journey" className="hover:text-fern">Journey</a>
            <a href="#stories" className="hover:text-fern">Stories</a>
          </div>

          <div className="hidden items-center gap-4 text-sm md:flex">
            <button className="font-medium">Sign in</button>
            <button className="rounded-full bg-ink px-5 py-2.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-fern">
              Get started <ArrowRight className="ml-1 inline h-4 w-4" />
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
            {menu ? <X /> : <Menu />}
          </button>
        </nav>

        {menu && (
          <div className="mx-4 mt-2 rounded-3xl bg-white p-5 shadow-xl md:hidden">
            {["Product","Features","Journey","Stories"].map(x => (
              <a key={x} href={`#${x.toLowerCase()}`} onClick={()=>setMenu(false)} className="block border-b border-black/5 py-4">{x}</a>
            ))}
            <button className="mt-4 w-full rounded-full bg-ink py-3 text-white">Get started</button>
          </div>
        )}
      </header>

      <section id="product" className="grid-bg overflow-hidden px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div className="reveal">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fern/10 bg-mint px-4 py-2 text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-fern" />
              A simpler way to grow your money
            </div>
            <h1 className="display max-w-2xl text-6xl leading-[.92] sm:text-7xl lg:text-[82px]">
              Your money,<br />finally made<br /><em className="not-italic text-fern">simple.</em>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-black/65 md:text-lg">
              Fermor helps you understand, act and grow financially with clear insights,
              practical tools and a beautiful experience built for real life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-ink px-6 py-3.5 font-semibold text-white hover:bg-fern">
                Get started <ArrowRight className="ml-1 inline h-4 w-4" />
              </button>
              <button className="rounded-full border border-black/10 bg-white px-6 py-3.5 font-semibold">
                <Play className="mr-2 inline h-4 w-4 fill-current" /> See how it works
              </button>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6">
              {[["50K+","People on Fermor"],["4.8/5","User satisfaction"],["₹250Cr+","Money goals tracked"]].map(([a,b])=>(
                <div key={a}><div className="text-2xl font-bold">{a}</div><div className="mt-1 text-xs text-black/50">{b}</div></div>
              ))}
            </div>
          </div>

          <DashboardVisual />
        </div>
      </section>

      <section id="features" className="px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.55fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-fern">How Fermor helps you</p>
            <h2 className="display mt-4 text-5xl leading-none md:text-6xl">Understand.<br/>Act.<br/>Grow.</h2>
            <p className="mt-6 max-w-sm leading-7 text-black/60">Everything you need to take control of your money and build a better financial future.</p>
            <a href="#journey" className="mt-7 inline-flex items-center gap-2 font-semibold underline underline-offset-4">Explore all features <ArrowRight className="h-4 w-4"/></a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map(({icon:Icon,title,text,tone})=>(
              <div key={title} className={`card rounded-[28px] p-7 transition hover:-translate-y-1 ${tone==="green"?"bg-[#e8f4ec]":tone==="rose"?"bg-[#fff0ed]":tone==="blue"?"bg-[#edf6fb]":"bg-[#fff5e7]"}`}>
                <div className="mb-10 flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-white/80"><Icon className="h-5 w-5"/></div>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white/70"><ArrowRight className="h-4 w-4"/></span>
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-6 text-black/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="border-y border-black/5 bg-white px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.65fr_1fr]">
            <div>
              <h2 className="display text-5xl leading-none md:text-6xl">Clarity for<br/>every stage<br/>of your journey</h2>
              <p className="mt-6 max-w-md leading-7 text-black/60">Whether you&apos;re just getting started or planning for the long term, Fermor adapts to your goals.</p>
            </div>
            <div className="grid divide-y border-y border-black/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:border-y-0">
              {[
                ["01","Start your journey","Understand your spending and build good habits."],
                ["02","Stay on track","Save more, manage bills and work towards your goals."],
                ["03","Grow your wealth","Make informed decisions and build long-term security."]
              ].map(([n,t,d])=>(
                <div key={n} className="py-7 sm:px-7 sm:py-3">
                  <span className="text-xs font-bold text-fern">{n}</span>
                  <h3 className="mt-8 text-xl font-bold">{t}</h3>
                  <p className="mt-3 leading-6 text-black/55">{d}</p>
                  <span className="mt-8 grid h-9 w-9 place-items-center rounded-full border border-black/10"><ArrowRight className="h-4 w-4"/></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-ink px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <GoalsCard />
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-emerald-300">Your goals, our support</p>
            <h2 className="display mt-5 text-5xl leading-none md:text-6xl">Turn your goals<br/>into reality.</h2>
            <p className="mt-6 max-w-lg leading-7 text-white/65">Set meaningful goals, track your progress and stay motivated with personalized insights.</p>
            <button className="mt-8 rounded-full bg-white px-6 py-3.5 font-semibold text-ink">Start your first goal <ArrowRight className="ml-1 inline h-4 w-4"/></button>
          </div>
        </div>
      </section>

      <section id="stories" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-fern">Loved by thousands</p>
          <div className="mt-4 grid gap-10 lg:grid-cols-[.65fr_1fr]">
            <h2 className="display text-5xl leading-none md:text-6xl">Real people.<br/>Real progress.</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["“Fermor made it so easy to understand where my money goes. I finally feel in control.”","Priya S.","Student"],
                ["“The goal tracking feature keeps me motivated. I’ve already saved more this year.”","Rahul K.","Software Engineer"],
                ["“Clean, simple and actually useful. This is exactly what I needed.”","Ananya M.","Designer"]
              ].map(([quote,name,role])=>(
                <article key={name} className="card rounded-3xl bg-white p-6">
                  <p className="leading-6 text-black/70">{quote}</p>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-mint font-bold text-fern">{name[0]}</div>
                    <div><div className="text-sm font-bold">{name}</div><div className="text-xs text-black/45">{role}</div></div>
                  </div>
                  <div className="mt-4 text-sm tracking-widest text-amber-500">★★★★★</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[32px] bg-mint p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-fern">Ready to take control?</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">Start your financial journey with Fermor.</h2>
            <p className="mt-3 text-black/60">A clearer, simpler way to understand, act and grow financially.</p>
          </div>
          <button className="shrink-0 rounded-full bg-ink px-7 py-4 font-semibold text-white">Get started for free <ArrowRight className="ml-1 inline h-4 w-4"/></button>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-black/55 md:flex-row md:items-center md:justify-between md:px-10">
        <div><div className="font-bold text-ink">Fermor</div><div className="mt-1 max-w-xs">A simpler way to understand, act and grow financially.</div></div>
        <div className="flex flex-wrap gap-5"><span>Product</span><span>Features</span><span>About</span><span>Blog</span><span>Privacy</span><span>Terms</span></div>
        <div>© 2026 Fermor</div>
      </footer>
    </main>
  );
}

function DashboardVisual() {
  return (
    <div className="relative min-h-[560px] lg:min-h-[640px]">
      <div className="absolute inset-10 rounded-[40px] bg-gradient-to-br from-[#bfe7d0] via-[#f0f4ec] to-[#dce8e5]" />
      <div className="glass absolute right-0 top-8 w-[90%] rounded-[28px] p-4 shadow-2xl md:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold"><span className="grid h-6 w-6 place-items-center rounded-md bg-fern text-white text-xs">F</span>Fermor</div>
          <div className="flex gap-3"><Search className="h-4 w-4"/><Bell className="h-4 w-4"/><span className="h-5 w-5 rounded-full bg-amber-200"/></div>
        </div>
        <div className="mb-5"><div className="text-xs text-black/40">Tuesday, 5 October</div><div className="mt-1 text-2xl font-bold">Good morning,<br/>let&apos;s make progress.</div></div>
        <div className="grid gap-2 sm:grid-cols-3">
          <Stat title="Total balance" value="₹4,85,320" delta="+12%"/>
          <Stat title="Monthly spending" value="₹42,800" delta="−8%"/>
          <Stat title="Savings goal" value="₹1,20,000" delta="60%"/>
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-2xl bg-white p-4">
            <div className="text-xs font-semibold">Recent transactions</div>
            <div className="mt-3 space-y-3">
              {transactions.map(([i,n,c,v])=><div key={n} className="flex items-center justify-between"><div className="flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-full bg-mint text-xs font-bold">{i}</span><div><div className="text-xs font-semibold">{n}</div><div className="text-[10px] text-black/40">{c}</div></div></div><span className={`text-xs font-bold ${v.startsWith("+")?"text-fern":""}`}>{v}</span></div>)}
            </div>
          </div>
          <div className="rounded-2xl bg-white p-4">
            <div className="text-xs font-semibold">Spending by category</div>
            <div className="mx-auto my-5 h-28 w-28 rounded-full bg-[conic-gradient(#1d806f_0_32%,#80c7b5_32%_56%,#d4a5e5_56%_74%,#f0c889_74%_88%,#777_88%_100%)] p-5">
              <div className="grid h-full place-items-center rounded-full bg-white text-center text-[10px]"><b className="text-sm">₹42,800</b><br/>this month</div>
            </div>
            <div className="space-y-1 text-[10px] text-black/55"><div>● Food & Dining 32%</div><div>● Shopping 24%</div><div>● Bills 18%</div></div>
          </div>
        </div>
      </div>
      <div className="float glass absolute bottom-5 left-0 w-44 rotate-[-8deg] rounded-[26px] p-3 shadow-xl md:w-52">
        <div className="rounded-[20px] bg-white p-4">
          <div className="text-[10px] text-black/40">Your balance</div><div className="mt-1 text-lg font-bold">₹4,85,320</div>
          <div className="mt-6 h-16"><svg viewBox="0 0 200 60" className="h-full w-full"><path d="M0 48 C30 50 35 28 60 35 S95 45 120 20 S155 35 200 8" fill="none" stroke="#0c5a4e" strokeWidth="3"/></svg></div>
          <div className="grid grid-cols-4 gap-1 text-center text-[9px]"><span>Send</span><span>Save</span><span>Goals</span><span>More</span></div>
        </div>
      </div>
    </div>
  );
}

function Stat({title,value,delta}:{title:string,value:string,delta:string}) {
  return <div className="rounded-2xl bg-white p-3"><div className="text-[10px] text-black/45">{title}</div><div className="mt-2 text-base font-bold">{value}</div><div className="mt-1 text-[9px] text-fern">{delta} from last month</div><div className="mt-3 h-7"><svg viewBox="0 0 100 30" className="h-full w-full"><path d="M0 23 C12 15 18 25 28 19 S44 12 55 20 S70 4 80 12 S90 9 100 2" fill="none" stroke="#59aa8d" strokeWidth="2"/></svg></div></div>;
}

function GoalsCard() {
  return <div className="glass max-w-md rotate-[-2deg] rounded-[28px] bg-white/95 p-5 text-ink shadow-2xl">
    <div className="flex items-center justify-between"><span className="font-bold">My Goals</span><span className="text-xs text-black/40">2026</span></div>
    {[
      ["Emergency Fund","₹80,000 / ₹2,00,000","40%","bg-emerald-100"],
      ["Trip to Japan","₹1,20,000 / ₹3,00,000","40%","bg-violet-100"],
      ["New Laptop","₹60,000 / ₹1,00,000","60%","bg-sky-100"]
    ].map(([name,val,pct,bg])=><div key={name} className="mt-5 flex items-center gap-3"><div className={`grid h-10 w-10 place-items-center rounded-xl ${bg}`}><Target className="h-4 w-4"/></div><div className="flex-1"><div className="flex justify-between text-xs font-bold"><span>{name}</span><span>{pct}</span></div><div className="mt-1 text-[10px] text-black/45">{val}</div><div className="mt-2 h-1.5 rounded-full bg-black/5"><div className="h-full rounded-full bg-fern" style={{width:pct}} /></div></div></div>)}
  </div>;
}
