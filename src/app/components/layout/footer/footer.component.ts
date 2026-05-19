import { Component } from '@angular/core';
import { RESUME_DATA } from '../../../data/resume.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  resume = RESUME_DATA;
  currentYear = new Date().getFullYear();

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.clearHash();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.clearHash();
    }
  }

  getFooterItems(cat: any): any[] {
    const category = cat.category;
    if (category === 'Frameworks & Testing') {
      const core = ['Angular', '.NET Core', '.NET Framework', 'RxJS'];
      return cat.items.filter((item: any) => core.includes(item.name));
    }
    if (category === 'Databases & Tools') {
      const core = ['MSSQL', 'IIS', 'AI', 'Git'];
      return cat.items.filter((item: any) => core.includes(item.name));
    }
    if (category === 'DevOps & Cloud') {
      const core = ['Azure', 'Jenkins', 'Docker'];
      return cat.items.filter((item: any) => core.includes(item.name));
    }
    return cat.items.slice(0, 3);
  }

  private clearHash(): void {
    setTimeout(() => {
      window.history.replaceState('', document.title, window.location.pathname + window.location.search);
    }, 100);
  }
}
