import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Pipe({name: 'userName'})
export class UserNamePipe implements PipeTransform {
  constructor(private userService: UserService) { }

  transform(id: number): Observable<string> {
    return this.userService.getUser(id).pipe(map(user => {
      return user.name;
    }));
  }
}
