import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { AssetService } from '../services/asset.service';
import { Asset } from '../models/asset.model';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {MatFormField, MatInput} from '@angular/material/input';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton, MatIconButton} from '@angular/material/button';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatIcon} from '@angular/material/icon';
import {MatLabel} from '@angular/material/form-field';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  imports: [
    FormsModule,
    // NgForOf,
    MatFormField,
    MatInput,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatToolbar,
    MatTable,
    MatIconButton,
    MatColumnDef,
    RouterLink,
    MatListItem,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatIcon,
    MatLabel,
    MatSidenavModule,
  ],
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  searchTerm = '';
  filteredAssets: Asset[] = [];
  displayedColumns: string[] = ['numero', 'descricao', 'centro', 'local', 'serie', 'aquisicao'];
  ativos = [
    {
      numero: '9462',
      descricao: 'Microcomputador Dell GI5 5530...',
      centro: 'Sagemcom',
      local: 'Etech',
      serie: 'JY6364A5I',
      aquisicao: '02/08/2024'}];

  constructor(private assetService: AssetService, private router: Router) {}

  ngOnInit(): void {
    this.filteredAssets = this.assetService.getAssets();
  }

  search(): void {
    this.filteredAssets = this.assetService.getAssets().filter(asset =>
      asset.descricao.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      asset.numeroSerie.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      asset.id.toString().includes(this.searchTerm)
    );
  }

  goToForm(): void {
    this.router.navigate(['/ativo']);
  }

  viewDetails(id: number): void {
    this.router.navigate(['/ativo', id]);
  }
}
