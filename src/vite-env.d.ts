/// <reference types="vite/client" />

interface ImportMetaEnv {
	VITE_APP_NAME: string;
}

interface ImportMeta {
	env: ImportMetaEnv;
}
