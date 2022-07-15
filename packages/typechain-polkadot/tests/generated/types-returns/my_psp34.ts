import type BN from 'bn.js';

export interface Id {
	U8 ? : number,
	U16 ? : number,
	U32 ? : number,
	U64 ? : number,
	U128 ? : (string | number),
	Bytes ? : Array<number>
}

export class IdBuilder {
	static U8(value: number): Id {
		return {
			U8: value
		};
	}
	static U16(value: number): Id {
		return {
			U16: value
		};
	}
	static U32(value: number): Id {
		return {
			U32: value
		};
	}
	static U64(value: number): Id {
		return {
			U64: value
		};
	}
	static U128(value: (string | number)): Id {
		return {
			U128: value
		};
	}
	static Bytes(value: Array<number>): Id {
		return {
			Bytes: value
		};
	}
}

export type AccountId = string | number[]

export type Key = string | number[]

export interface PSP34Error {
	Custom ? : string,
	SelfApprove ? : null,
	NotApproved ? : null,
	TokenExists ? : null,
	TokenNotExists ? : null,
	SafeTransferCheckFailed ? : string
}

export class PSP34ErrorBuilder {
	static Custom(value: string): PSP34Error {
		return {
			Custom: value
		};
	}
	static SelfApprove(): PSP34Error {
		return {
			SelfApprove: null
		};
	}
	static NotApproved(): PSP34Error {
		return {
			NotApproved: null
		};
	}
	static TokenExists(): PSP34Error {
		return {
			TokenExists: null
		};
	}
	static TokenNotExists(): PSP34Error {
		return {
			TokenNotExists: null
		};
	}
	static SafeTransferCheckFailed(value: string): PSP34Error {
		return {
			SafeTransferCheckFailed: value
		};
	}
}
