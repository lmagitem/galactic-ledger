import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from '../form-controls/checkbox/checkbox.component';
import { TextboxComponent } from '../form-controls/textbox/textbox.component';
import { SelectComponent } from '../form-controls/select/select.component';
import { SettingsService } from '../../services/settings.service';
import { StateService } from '../../services/state.service';
import { NumberInputComponent } from '../form-controls/number-input/number-input.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CheckboxComponent, TextboxComponent, SelectComponent, NumberInputComponent],
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup = new FormGroup({});
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formConfig: any[] = [];

  constructor(
    private settingService: SettingsService,
    private stateService: StateService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.settingsForm = this.fb.group({
      // seed: [''],
      // galaxyType: [''],
      useOurGalaxy: [false],
      onlyInterestingSystems: [false],
      brownDwarfGenChance: [this.settingService.settings.star.brown_dwarf_gen_chance],
      redDwarfOneGenChance: [this.settingService.settings.star.red_dwarf_one_gen_chance],
      redDwarfTwoGenChance: [this.settingService.settings.star.red_dwarf_two_gen_chance],
      redDwarfThreeGenChance: [this.settingService.settings.star.red_dwarf_three_gen_chance],
      redDwarfFourGenChance: [this.settingService.settings.star.red_dwarf_four_gen_chance],
      redDwarfFiveGenChance: [this.settingService.settings.star.red_dwarf_five_gen_chance],
      orangeDwarfGenChance: [this.settingService.settings.star.orange_dwarf_gen_chance],
      yellowDwarfGenChance: [this.settingService.settings.star.yellow_dwarf_gen_chance],
      whiteStarGenChance: [this.settingService.settings.star.white_star_gen_chance],
      blueStarOneGenChance: [this.settingService.settings.star.blue_star_one_gen_chance],
      blueStarTwoGenChance: [this.settingService.settings.star.blue_star_two_gen_chance],
      blueStarThreeGenChance: [this.settingService.settings.star.blue_star_three_gen_chance],
      violetStarOneGenChance: [this.settingService.settings.star.violet_star_one_gen_chance],
      violetStarTwoGenChance: [this.settingService.settings.star.violet_star_two_gen_chance],
      violetStarThreeGenChance: [this.settingService.settings.star.violet_star_three_gen_chance],
    });

    this.formConfig = [
      // { type: 'textbox', name: 'seed', label: 'Seed' },
      // {
      //   type: 'select',
      //   name: 'galaxyType',
      //   label: 'Galaxy Type',
      //   options: [
      //     { label: 'Spiral', value: 'spiral' },
      //     { label: 'Elliptical', value: 'elliptical' },
      //     { label: 'Irregular', value: 'irregular' },
      //   ],
      // },
      { type: 'checkbox', name: 'useOurGalaxy', label: 'Use our galaxy' },
      { type: 'checkbox', name: 'onlyInterestingSystems', label: 'Only generate interesting systems' },
      { type: 'number', name: 'brownDwarfGenChance', label: 'Brown Dwarf Generation Chance' },
      { type: 'number', name: 'redDwarfOneGenChance', label: 'Red Dwarf One Generation Chance' },
      { type: 'number', name: 'redDwarfTwoGenChance', label: 'Red Dwarf Two Generation Chance' },
      { type: 'number', name: 'redDwarfThreeGenChance', label: 'Red Dwarf Three Generation Chance' },
      { type: 'number', name: 'redDwarfFourGenChance', label: 'Red Dwarf Four Generation Chance' },
      { type: 'number', name: 'redDwarfFiveGenChance', label: 'Red Dwarf Five Generation Chance' },
      { type: 'number', name: 'orangeDwarfGenChance', label: 'Orange Dwarf Generation Chance' },
      { type: 'number', name: 'yellowDwarfGenChance', label: 'Yellow Dwarf Generation Chance' },
      { type: 'number', name: 'whiteStarGenChance', label: 'White Star Generation Chance' },
      { type: 'number', name: 'blueStarOneGenChance', label: 'Blue Star One Generation Chance' },
      { type: 'number', name: 'blueStarTwoGenChance', label: 'Blue Star Two Generation Chance' },
      { type: 'number', name: 'blueStarThreeGenChance', label: 'Blue Star Three Generation Chance' },
      { type: 'number', name: 'violetStarOneGenChance', label: 'Violet Star One Generation Chance' },
      { type: 'number', name: 'violetStarTwoGenChance', label: 'Violet Star Two Generation Chance' },
      { type: 'number', name: 'violetStarThreeGenChance', label: 'Violet Star Three Generation Chance' },
    ];

    this.settingsForm.get('useOurGalaxy')?.valueChanges.subscribe((value) => {
      this.settingService.settings.system.use_ours = value;
      this.stateService.updateGalaxy();
      this.stateService.updateSystem();
    });
    this.settingsForm.get('onlyInterestingSystems')?.valueChanges.subscribe((value) => {
      this.settingService.settings.system.only_interesting = value;
      this.stateService.updateSystem();
    });
    this.settingsForm.get('brownDwarfGenChance')?.valueChanges.subscribe((value) => {
      this.settingService.settings.star.brown_dwarf_gen_chance = value;
      this.stateService.updateSystem();
    });
    this.settingsForm.get('redDwarfOneGenChance')?.valueChanges.subscribe((value) => {
      this.settingService.settings.star.red_dwarf_one_gen_chance = value;
      this.stateService.updateSystem();
    });
    this.settingsForm.get('redDwarfTwoGenChance')?.valueChanges.subscribe((value) => {
      this.settingService.settings.star.red_dwarf_two_gen_chance = value;
      this.stateService.updateSystem();
    });
    this.settingsForm.get('redDwarfThreeGenChance')?.valueChanges.subscribe((value) => {
      this.settingService.settings.star.red_dwarf_three_gen_chance = value;
      this.stateService.updateSystem();
    });
    this.settingsForm.get('redDwarfFourGenChance')?.valueChanges.subscribe((value) => {
      this.settingService.settings.star.red_dwarf_four_gen_chance = value;
      this.stateService.updateSystem();
    });
    this.settingsForm.get('redDwarfFiveGenChance')?.valueChanges.subscribe((value) => {
      this.settingService.settings.star.red_dwarf_five_gen_chance = value;
      this.stateService.updateSystem();
    });
    this.settingsForm.get('orangeDwarfGenChance')?.valueChanges.subscribe((value) => {
      this.settingService.settings.star.orange_dwarf_gen_chance = value;
      this.stateService.updateSystem();
    });
    this.settingsForm.get('yellowDwarfGenChance')?.valueChanges.subscribe((value) => {
      this.settingService.settings.star.yellow_dwarf_gen_chance = value;
      this.stateService.updateSystem();
    });
    this.settingsForm.get('whiteStarGenChance')?.valueChanges.subscribe((value) => {
      this.settingService.settings.star.white_star_gen_chance = value;
      this.stateService.updateSystem();
    });
    this.settingsForm.get('blueStarOneGenChance')?.valueChanges.subscribe((value) => {
      this.settingService.settings.star.blue_star_one_gen_chance = value;
      this.stateService.updateSystem();
    });
    this.settingsForm.get('blueStarTwoGenChance')?.valueChanges.subscribe((value) => {
      this.settingService.settings.star.blue_star_two_gen_chance = value;
      this.stateService.updateSystem();
    });
    this.settingsForm.get('blueStarThreeGenChance')?.valueChanges.subscribe((value) => {
      this.settingService.settings.star.blue_star_three_gen_chance = value;
      this.stateService.updateSystem();
    });
    this.settingsForm.get('violetStarOneGenChance')?.valueChanges.subscribe((value) => {
      this.settingService.settings.star.violet_star_one_gen_chance = value;
      this.stateService.updateSystem();
    });
    this.settingsForm.get('violetStarTwoGenChance')?.valueChanges.subscribe((value) => {
      this.settingService.settings.star.violet_star_two_gen_chance = value;
      this.stateService.updateSystem();
    });
    this.settingsForm.get('violetStarThreeGenChance')?.valueChanges.subscribe((value) => {
      this.settingService.settings.star.violet_star_three_gen_chance = value;
      this.stateService.updateSystem();
    });
  }

  getFormControl(name: string): FormControl {
    return this.settingsForm.get(name) as FormControl;
  }
}
