import {Usuario} from './usuario';

export class Postagem{
    curtidas: Usuario[];
    usuario: Usuario;
    texto: string;
    id: number;
}