import { Directive } from "@angular/core";


@Directive({
    selector: 'a[safeLink]',
    standalone: true,
    host : {
        '(click)' : 'wantToLeave($event)'
    }
})


export class SafeLinkDirective{
    wantToLeave(event:MouseEvent){
        const answer = window.confirm("Do you want to leave this site?");
        if(answer)
            return ;
        event.preventDefault();
    }
}