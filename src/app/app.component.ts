import { Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'superhero-theming';
  public quote: String = "Angular Theming Project";
  public about: String = 'Choose a hero (or the villain) in the menu above to change this site theme. The purpose of this project was learning how to make a custom theme with Angular, changing its colors and typography. Right now you are seeing Angular Indigo-Pink theme.';
  public imgsrc: String = '/assets/heroes.png';
  public font1: String = 'Roboto - Regular';
  public font2: String = 'Roboto - Regular';
  public font3: String = 'Roboto - Semibold';

  @HostBinding('class') className = '';

  constructor(private overlay: OverlayContainer) {}

  changeTheme(superhero: string) {
    if ((this.className = superhero))
      this.overlay.getContainerElement().classList.add(superhero);
    else
      this.overlay.getContainerElement().classList.remove(superhero);

    this.changeLayout(superhero);
  }

  changeLayout(superhero: string) {
    switch (superhero) {
      case "ironman":
        this.quote = '"Genius, billionaire, playboy, philanthropist."'
        this.about = "Tony Stark is a genius inventor and billionaire industrialist, who suits up in his armor of cutting-edge technology to become the super hero Iron Man."
        this.font1 = "Barlow Condensed - Regular";
        this.font2 = "Rasa - Light";
        this.font3 = "Barlow - SemiBold";
        this.imgsrc = "/assets/ironman.png"
        break;
      case "captain":
        this.quote = '"I can do this all day."';
        this.about = 'Steven Rogers volunteered for Project Rebirth where he received the Super-Soldier Serum, an element that enhanced his frail body to the peak of human physicality.';
        this.font1 = "Libre Baskerville - Bold";
        this.font2 = "Libre Baskerville - Regular";
        this.font3 = "Work Sans - Bold";
        this.imgsrc = "/assets/captainshield.png"
        break;
      case "loki":
        this.quote = '"I am burdened with glorious purpose."';
        this.about = "Loki Laufeyson, is the trickster god, god of mischief, evil, and lies. Born a frost giant, but smaller than the rest of his race, he was adopted by the All-Father Odin and raised alongside Thor in Asgard.";
        this.font1 = "Playfair Display - Italic";
        this.font2 = "Monteserrat - Light";
        this.font3 = "Montserrat - Bold";
        this.imgsrc = "/assets/loki.png"
        break;
      default:
        this.quote = "Angular Theming Project";
        this.about = 'Choose a hero (or the villain) in the menu above to change this site theme. The purpose of this project was learning how to make a custom theme with Angular, changing its colors and typography. Right now you are seeing Angular Indigo-Pink theme.';
        this.imgsrc = '/assets/heroes.png';
        this.font1 = 'Roboto - Regular';
        this.font2 = 'Roboto - Regular';
        this.font3 = 'Roboto - Semibold';
    }
  }
}
