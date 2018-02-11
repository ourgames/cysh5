require "json"
local LG = _G
local tableContent

-- for CCLuaEngine traceback
function __G__TRACKBACK__(msg)
    cclog("----------------------------------------")
    cclog("LUA ERROR: " .. tostring(msg) .. "\n")
    cclog(debug.traceback())
    cclog("----------------------------------------")
end

function jsonToLua(jsonContent)
	tableContent = ""
	tab = json.decode(jsonContent)
	return print_lua_table(tab, 0)
end

function print_lua_table (lua_table, indent)
	indent = indent or 0
	for k, v in pairs(lua_table) do
		if type(k) == "string" then
			if indent == 0 then
				k = string.format("%s", k)
			else 
				k = string.format("%q", k)
			end
		end
		local szSuffix = ""
		if type(v) == "table" then
			szSuffix = "{"
		end
		local szPrefix = string.rep("    ", indent)
		formatting = szPrefix.."["..k.."]".." = "..szSuffix
		if type(v) == "table" then
			tableContent = tableContent .. formatting .. "\n"
			-- print(formatting)
			print_lua_table(v, indent + 1)
			tableContent = tableContent .. szPrefix.."}," .. "\n"
			-- print(szPrefix.."},")
		else
			local szValue = ""
			if type(v) == "string" then
				szValue = string.format("%q", v)
			else
				szValue = tostring(v)
			end
			tableContent = tableContent .. formatting..szValue.."," .. "\n"
			-- print(formatting..szValue..",")
		end
	end
	return tableContent
end
