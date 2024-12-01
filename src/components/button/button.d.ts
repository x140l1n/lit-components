export type TVariant = 'primary' | 'secondary';
export type TSizes = 'default' | 'small' | 'large';

export interface IButtonProps {
	variant: TVariant;
	size: TSizes;
}
