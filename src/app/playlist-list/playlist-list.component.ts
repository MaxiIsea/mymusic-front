import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PlaylistService } from '../playlist.service';
import { Observable } from 'rxjs';
import { Playlist } from '../playlist';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit {
  playlists!: Playlist[];

  constructor(private route:ActivatedRoute, 
    private playlistService:PlaylistService, 
    private authenticationService:AuthenticationService,
    private router:Router
    ) { }

  ngOnInit(){
    this.playlistService.getPlaylists().subscribe((res: any) =>{
      this.playlists = res;
    } )
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }

}
