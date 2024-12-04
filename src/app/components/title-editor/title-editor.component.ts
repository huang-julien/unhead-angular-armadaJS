import { FormsModule } from "@angular/forms";
import { Component, OnDestroy } from "@angular/core";
 
@Component({
    standalone: true,
    imports: [FormsModule, ],
    selector: 'title-editor',
    template: `
<h1>Title Editor</h1>
<form (ngSubmit)="onSubmit()">
    <input [(ngModel)]="title" name="title" placeholder="Title" />
    <button type="submit">Submit</button> 
</form>
`
})
export class TitleEditor implements OnDestroy {
    title = ''; 

    onSubmit() {
        
    }

    ngOnDestroy(): void {
         
    }
}