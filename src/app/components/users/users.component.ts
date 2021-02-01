import { UserService } from '../../services/user-service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})

export class UsersComponent implements OnInit {

  name: string = '';
  lastname: string = '';
  username: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';

  users: [] = [];
  user: User;
  userId:number;

  constructor(private userService: UserService, private modal:NgbModal) { }

  //METODO QUE CARGA CUANDOP EL COMPONENTE ARRANCA
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((response:any)=>{
      this.users = response;
    })
  }

  saveUser(){
    const user = new User;
    user.name = this.name;
    user.lastname = this.lastname;
    user.username = this.username;
    user.email = this.email;
    user.phone = this.phone;
    user.address = this.address;
    //enviar datos al servicio
    this.userService.saveUser(user).subscribe((response:any)=>{
      this.getUsers();
      Swal.fire(
        'Genial!',
        'Usuario agregado con exito',
        'success',
        
      )
    },error=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo va mal, vuelta a intentarlo!',
      })
    })
  }

  editUser(user){
    //asigar el valor al input
    this.userId = user.id;
    this.name = user.perfil.name;
    this.lastname = user.perfil.lastname;
    this.username = user.username;
    this.email = user.email;
    this.phone = user.perfil.phone;
    this.address = user.perfil.address;
    
  }

  updateUser(){
    const user = new User;
    user.id = this.userId;
    user.name = this.name;
    user.lastname = this.lastname;
    user.username = this.username;
    user.email = this.email;
    user.phone = this.phone;
    user.address = this.address;
    this.userService.updateUser(user).subscribe((response:any)=>{
      this.getUsers();
      Swal.fire(
        'Genial!',
        `Usuario ${user.name} editado con exito`,
        'success'
      )
    },error=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo va mal, vuelta a intentarlo!',
      })
    })
  }

  deleteUser(user: User){
    
    this.userService.deleteUser(user).subscribe((response:any)=>{
      
      this.getUsers();
    })
  }

}
