import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { AssetService } from '../services/asset.service';
import { Asset } from '../models/asset.model';
import { Location } from '@angular/common';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {MatFormField, MatInput} from '@angular/material/input';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatLabel} from '@angular/material/form-field';

@Component({
  selector: 'app-active-form',
  templateUrl: './active-form.component.html',
  imports: [
    MatSidenavContent,
    MatToolbar,
    MatFormField,
    MatInput,
    MatFormField,
    MatNavList,
    MatSidenavContainer,
    MatSidenavContent,
    MatListItem,
    RouterLink,
    MatIconButton,
    MatSidenav,
    MatIcon,
    MatLabel
  ],
  styleUrls: ['./active-form.component.css']
})
export class ActiveFormComponent implements OnInit {
  asset: Asset = new Asset();
  editMode = true;

  constructor(
    private route: ActivatedRoute,
    private assetService: AssetService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const found = this.assetService.getAssetById(+id);
      if (found) {
        this.asset = { ...found };
        this.editMode = false; // se tiver id, tá em modo visualização
      }
    }
  }

  salvar(): void {
    this.assetService.saveAsset(this.asset);
    alert('Ativo salvo com sucesso!');
    this.editMode = false;
  }

  voltar(): void {
    this.location.back();
  }

  habilitarEdicao(): void {
    this.editMode = true;
  }
}
