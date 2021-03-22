import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ProblemeComponent } from './probleme.component';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ProblemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('Zone PRÉNOM invalide avec 2 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.get('prenom');
    zone.setValue('a'.repeat(2));
    errors = zone.errors || {};
    expect(errors['nbreCaracteresInsuffisants']).toBeTruthy();
  });

  it('Zone PRÉNOM valide avec 3 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.get('prenom');
    zone.setValue('a'.repeat(3));
    errors = zone.errors || {};
    expect(errors['nbreCaracteresInsuffisants']).toBeFalsy();
  });

  it('Zone PRÉNOM valide avec 200 caractères', () => {
    let errors = {};
    let zone = component.problemeForm.get('prenom');
    zone.setValue('a'.repeat(200));
    errors = zone.errors || {};
    expect(errors['nbreCaracteresInsuffisants']).toBeFalsy();
  });

  it('Zone PRÉNOM invalide avec aucune valeur', () => {
    let errors = {};
    let zone = component.problemeForm.get('prenom');
    errors = zone.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('Zone PRÉNOM invalide avec 10 espaces', () => {
    let errors = {};
    let zone = component.problemeForm.get('prenom');
    zone.setValue('          '.trim());
    errors = zone.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('Zone PRÉNOM invalide avec 2 espaces et 1 caractère', () => {
    let errors = {};
    let zone = component.problemeForm.get('prenom');
    zone.setValue('a  '.trim());
    errors = zone.errors || {};
    expect(errors['nbreCaracteresInsuffisants']).toBeTruthy();
  });
});
