import { FormsModule } from "@angular/forms";
import { Component, OnDestroy } from "@angular/core";
import { useHead } from "unhead";
 
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
    headEntry?: ReturnType<typeof useHead>

    onSubmit() {
        if(this.headEntry) {
            this.headEntry.patch({
                title: this.title
            })
        } else {

            this.headEntry =  useHead({
                title: this.title
            })
        }
        
    }

    ngOnDestroy(): void {
         this.headEntry?.dispose()
    }
}