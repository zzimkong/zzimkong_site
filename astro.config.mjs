// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  	// 1. 사용자님의 실제 GitHub Pages 주소를 적어주세요.
  	site: 'https://zzimkong.github.io',
  
  	// 2. 저장소 이름을 'base'로 설정해야 경로를 제대로 찾습니다.
  	base: '/zzimkong_site',

	integrations: [
		starlight({
			title: 'Zzimkong',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
