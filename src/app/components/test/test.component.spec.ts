import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        const dataStrings = fixture.nativeElement.querySelectorAll('p');
        expect(dataStrings).toHaveLength(6);
        expect(dataStrings[5].innerHTML).toEqual('test.comp11111')
        console.log(dataStrings);
    });
});
