import { readdir } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
async function walk(dir){const entries=await readdir(dir,{withFileTypes:true});const out=[];for(const entry of entries){const path=join(dir,entry.name);if(entry.isDirectory())out.push(...await walk(path));else if(extname(path)===".js")out.push(path)}return out}
const files=await walk(fileURLToPath(new URL("../src",import.meta.url)));
for(const file of files){const result=spawnSync(process.execPath,["--check",file],{stdio:"inherit"});if(result.status!==0)process.exit(result.status)}
console.log(`Syntax check: ${files.length} archivos correctos.`);
