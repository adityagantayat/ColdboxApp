<cfcomponent output="false" displayname="validateComponent">
    <cffunction name="emailExists" access="remote" output="false" returntype="boolean" returnformat="JSON">
		<!--- check if the email provided by a new user in registration form already exists in database --->
		<cfargument name="checkEmail" type="string" required="true" />
		

		<cftry>
		<cfset var emailNotExists = false /> <!--- set the value to false by default --->
		

		<!--- check if the email is present in database --->
		<cfquery name="checkEmailPresent" result="emailPresent">
			SELECT  * FROM student
			WHERE email=<cfqueryparam value="#arguments.checkEmail#" cfsqltype="cf_sql_varchar" />
		</cfquery>


		<cfif emailPresent.recordCount EQ 0>
			<!--- if not present set it to true in order to return true --->
			<cfset emailNotExists = true />

		<cfelse>
			<!--- if present set it to false in order to return false --->

			<cfset emailNotExists = false />
		</cfif>

		<cfcatch type="any">
			<!--- send the error to logErrorFile.cfc to log the errors in a file  --->
<!--- 			<cfset Super.logError(cfcatch)/> --->
<!--- 			<cflocation url="sorry.cfm"/> --->
		</cfcatch>
		</cftry>

		<cfreturn emailNotExists/>
                       

	</cffunction>

	<cffunction name="register" access="remote" output="false">
		<!--- accept the input values of registration form as arguments to insert them in the database --->
		<cfargument name="userName" type="string" required="true" />
		<cfargument name="userPassword" type="string" required="true" />
		<cfargument name="userEmail" type="string" required="true" />
		<cfargument name="userCourse" type="string" required="true" />
		<cfargument name="userGender" type="string" required="true" />
		<cfargument name="userLanguage" type="string" required="true" />


		<cftry>
			<!--- create an array to store the authentication error messages --->
		<cfset session.authMessages = ArrayNew(1) />

		
		<cfquery >
			<!--- -- insert the data into the database--->
			INSERT INTO student (name, email, password, gender, language, course) VALUES (
				<cfqueryparam value = "#Trim(arguments.userName)#" cfsqltype = "cf_sql_varchar">,	
				<cfqueryparam value = "#Trim(arguments.userEmail)#" cfsqltype = "cf_sql_varchar">,	
				<cfqueryparam value = "#Trim(arguments.userPassword)#" cfsqltype = "cf_sql_varchar">,	
				<cfqueryparam value = "#Trim(arguments.userGender)#" cfsqltype = "cf_sql_varchar">,	
				<cfqueryparam value = "#Trim(arguments.userLanguage)#" cfsqltype = "cf_sql_varchar">,	
				<cfqueryparam value = "#Trim(arguments.userCourse)#" cfsqltype = "cf_sql_varchar">	
				);
		</cfquery>
		<cfcatch type="any">
			
		</cfcatch>
		</cftry>
	</cffunction>
    </cfcomponent>