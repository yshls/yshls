import { writeFileSync } from 'node:fs';
import Parser from 'rss-parser';

const parser = new Parser({
  headers: {
    Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
  },
});

// 초기 텍스트 정의
let text = `
<!-- 타이핑 효과 -->
<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1200&color=FBA12F&center=true&vCenter=true&width=500&lines=Hi+there%2C+I'm+Yang+Sehyun!;Frontend+Developer+in+Progress;Clean+UI%2C+Clear+Logic;Slow+and+Steady+Growth" />
</p>

<!-- 소개 -->
<p align="center">
  I build clean, accessible, and modern user interfaces.<br/>
  Passionate about frontend development, UI/UX, and thoughtful code.
</p>

---

## ⚙️ Tech Stack

<p align="center">
  <img src="https://img.icons8.com/color/36/javascript.png" alt="JavaScript" title="JavaScript"/>
  <img src="https://img.icons8.com/color/36/html-5--v1.png" alt="HTML5" title="HTML5"/>
  <img src="https://img.icons8.com/color/36/css3.png" alt="CSS3" title="CSS3"/>
  <img src="https://img.icons8.com/officel/36/react.png" alt="React" title="React"/>
  <img src="https://vitejs.dev/logo.svg" alt ="Vite" title="Vite" width="36" height="36"/>
  <img src="https://img.icons8.com/fluency/36/node-js.png" alt="Node.js" title="Node.js"/>
  <img src="https://img.icons8.com/color/36/git.png" alt="Git" title="Git"/>
  <img src="https://img.icons8.com/color/36/figma--v1.png" alt="Figma" title="Figma"/>
</p>

---

## 📊 GitHub Insights

<p align="left">
  <img src="https://github-readme-stats.vercel.app/api?username=yshls&show_icons=true&theme=slateorange&hide_border=true&count_private=true&include_all_commits=true&custom_title=My%20GitHub%20Stats" width="350" />
   <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=yshls&layout=compact&theme=slateorange&hide_border=true" width="350" />
</p> 

---

## 🚀 Currently Working On

- Enhancing React skills  
- Practicing algorithms and data structures  
- Designing accessible UI components  

---

## 📕 Latest Blog Posts
`;

(async () => {
  const feed = await parser.parseURL('https://recordoftheday.tistory.com/rss');

  text += `<ul>`;

  for (let i = 0; i < Math.min(feed.items.length, 3); i++) {
    const { title, link } = feed.items[i];
    console.log(`${i + 1}번째 게시물`);
    console.log(`추가될 제목: ${title}`);
    console.log(`추가될 링크: ${link}`);
    text += `<li><a href='${link}' target='_blank'>${title}</a></li>`;
  }

  text += `</ul>`;

  writeFileSync('README.md', text, 'utf8');
  console.log('업데이트 완료');
})();
