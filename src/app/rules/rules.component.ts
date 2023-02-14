import { Component } from '@angular/core';

export interface ListSection {
  name: string;
}

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent {

  chapter_sections = [{
    title: 'Creating A Character', desc: "<p>Your first step in playing an adventurer in the Dungeons & Dragons game is to imagine and create a character of your own. Your character is a combination of game statistics, roleplaying hooks, and your imagination. You choose a race (such as human or halfling) and a class (such as fighter or wizard). You also invent the personality, appearance, and backstory of your character. Once completed, your character serves as your representative in the game, your avatar in the Dungeons & Dragons world.</p><p>Before you dive into step 1 below, think about the kind of adventurer you want to play.You might be a courageous fighter, a skulking rogue, a fervent cleric, or a flamboyant wizard.Or you might be more interested in an unconventional character, such as a brawny rogue who likes hand- to - hand combat, or a sharpshooter who picks off enemies from afar.Do you like fantasy fiction featuring dwarves or elves ? Try building a character of one of those races.Do you want your character to be the toughest adventurer at the table ? Consider the fighter class.If you don’t know where else to begin, take a look at the illustrations in any Dungeons & Dragons book to see what catches your interest.</p><p>Once you have a character in mind, follow these steps in order, making decisions that reflect the character you want.Your conception of your character might evolve with each choice you make.What’s important is that you come to the table with a character you’re excited to play.</p><p>Throughout this section, we use the term character sheet to mean whatever you use to track your character, whether it’s a formal character sheet(like the one at the end of these rules), some form of digital record, or a piece of notebook paper.An official D & D character sheet is a fine place to start until you know what information you need and how you use it during the game.</p>", if: 1, sub_sections: [{
      title: 'Choose a Race', desc: "<p>Every character belongs to a race, one of the many intelligent humanoid species in the D&D world. The most common player character races are dwarves, elves, halflings, and humans. Some races also have subraces, such as mountain dwarf or wood elf. The Races section provides more information about these races.</p><p>The race you choose contributes to your character’s identity in an important way, by establishing a general appearance and the natural talents gained from culture and ancestry.Your character’s race grants particular racial traits, such as special senses, proficiency with certain weapons or tools, proficiency in one or more skills, or the ability to use minor spells.These traits sometimes dovetail with the capabilities of certain classes(see step 2).For example, the racial traits of lightfoot halflings make them exceptional rogues, and high elves tend to be powerful wizards.Sometimes playing against type can be fun, too.Halfling paladins and mountain dwarf wizards, for example, can be unusual but memorable characters.</p><p>Your race also increases one or more of your ability scores, which you determine in step 3. Note these increases and remember to apply them later.</p><p>Record the traits granted by your race on your character sheet.Be sure to note your starting languages and your base speed as well.</p>"
    }, {
        title: 'Choose a Class', desc: "<p>Every adventurer is a member of a class. Class broadly describes a character’s vocation, what special talents he or she possesses, and the tactics he or she is most likely to employ when exploring a dungeon, fighting monsters, or engaging in a tense negotiation. The character classes are described in the Classes section.</p><p>Your character receives a number of benefits from your choice of class.Many of these benefits are class features — capabilities(including spellcasting) that set your character apart from members of other classes.You also gain a number of proficiencies: armor, weapons, skills, saving throws, and sometimes tools.Your proficiencies define many of the things your character can do particularly well, from using certain weapons to telling a convincing lie.</p><p>On your character sheet, record all the features that your class gives you at 1st level.</p><h3>Level</h3><p>Typically, a character starts at 1st level and advances in level by adventuring and gaining experience points (XP). A 1st-level character is inexperienced in the adventuring world, although he or she might have been a soldier or a pirate and done dangerous things before.</p><p>Starting off at 1st level marks your character’s entry into the adventuring life.If you’re already familiar with the game, or if you are joining an existing D& D campaign, your DM might decide to have you begin at a higher level, on the assumption that your character has already survived a few harrowing adventures.</p><p>Record your level on your character sheet.If you’re starting at a higher level, record the additional elements your class gives you for your levels past 1st.Also record your experience points.A 1st - level character has 0 XP.A higher- level character typically begins with the minimum amount of XP required to reach that level(see “Beyond 1st Level” later in this section).</p>"}, {title:'Determine Ability Scores'}, {title:'Describe Your Character'}, {title: 'Choose Equipment'}, {title: 'Come Together'}, {title: 'Beyond 1st Level'}]}, {title: 'Playing The Game', if: 2}, { title: 'The Rules of Magic', if: 3}, { title: "Dungeon Master's Tools", if: 4} ];


  displayedColumns: string[] = ['chapter', 'name'];
  dataSource = Rules_Data;
  clickedRows = new Set<Rules>();    

  public display_rules = 0;
  public sections_display = 0;
  rules(value: string) {
  console.log(value)
  if (value == 'ch1'){
    this.display_rules = 1;
    this.sections_display = 1;
  } else if (value == 'ch2'){
    this.display_rules = 2;
    this.sections_display = 2;
  } else if (value == 'ch3'){
    this.display_rules = 3;
    this.sections_display = 3;
  } else if (value == 'ch4'){
    this.display_rules = 4;
    this.sections_display = 4;
  } else {
    this.display_rules = 0;
    this.sections_display = 0;
  }


}

}


export interface Rules {
  name: string;
  chapter: number;
  btn_link: string;
  if: number;
  section: string;
}

const Rules_Data: Rules[] = [
  { chapter: 1, name: 'Creating A Character', btn_link: 'ch1', if: 1, section: 'section_one' },
  { chapter: 2, name: 'Playing The Game', btn_link: 'ch2', if: 2, section: 'section_one' }, 
  { chapter: 3, name: 'The Rules of Magic', btn_link: 'ch3', if: 3, section: 'section_one' },
  { chapter: 4, name: "Dungeon Master's Tools", btn_link: 'ch4', if:4, section: 'section_one'}
];