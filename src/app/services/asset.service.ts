import { Injectable } from '@angular/core';
import { Asset } from '../models/asset.model';

@Injectable({ providedIn: 'root' })
export class AssetService {
  private assets: Asset[] = [
    { id: 9462, descricao: 'Notebook Dell i7', centroCusto: '10123', local: 'Etech', numeroSerie: 'JY6364A5I', dataCompra: '2024-08-02' },
    // mais ativos...
  ];

  getAssets(): Asset[] {
    return this.assets;
  }

  getAssetById(id: number): Asset | undefined {
    return this.assets.find(asset => asset.id === id);
  }

  saveAsset(asset: Asset): void {
    const index = this.assets.findIndex(a => a.id === asset.id);
    if (index !== -1) this.assets[index] = asset;
    else this.assets.push(asset);
  }
}
