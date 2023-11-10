---
title: Company

---
![img_10.png](admin_img/img_10.png)

### Site Details

#### Site Name

This is your TestQuality site's name. It appears in the web address. If you change it, update saved links elsewhere to match the new address.

### Contact Details

#### Email 
Your company's contact email.

#### Phone
Your company's phone number.

#### Company
Your company's name.

#### Website
Your company's website.

### Single Sign On (SSO)

Single Sign-On (SSO) is an authentication process that allows users to access multiple enterprise applications with a single set of login credentials. This combines several application logins into one, where you use credentials once and get access to all applications without individually logging into each application. 

![img_32.png](admin_img/img_32.png)

#### OpenID Connect

To use single sign on with applications that support OpenID, you can use this section to configure your organisations SSO. 

The following example is how to use *Microsoft Azure* as your SSO provider.

**Azure AD**
1. Go to "App Registrations" and click "New Registration".
   2 Fill a new application form.
   Introduce a name.
   "Under Redirect URI" select platform Web and introduce the following url https://api.testquality.com/api/sso/openid/callback
   Click "Register"
3. Go to "Authentication" and select "ID tokens (used for implicit and hybrid flows)"
   ![img_27.png](admin_img/img_27.png)
4. Save the changes.

5. In the application overview Under Endpoints copy "OpenID Connect metadata document"
   will be something like https://login.microsoftonline.com/{{tenant-id}}/v2.0/.well-known/openid-configuration and the "Application (client) ID" from overview page.
   We will need those later during azure id setup on testQuality.
   
6. Go to "Company" in the administration Area in TestQuality.

![img_28.png](admin_img/img_28.png)
   
7. Paste "OpenID Connect metadata document" from Azure AD onto "OpenID Connect Discovery" and "Application (client) ID" onto "OpenID Client ID".

#### Automatic Sign Up

To allow automatic signup to your TestQuality site, add your domain under "Automatic Sign up". Adding a domain to the automatic sign up means that any user with an email address from your domain will be able to sign up to TestQuality and will join your site automatically.

![img_29.png](admin_img/img_29.png)


To configure GitHub as your SSO provider, you will need to have a valid integration set up. 

1. In TestQuality in the top right corner menu select "Integrations".
   
   ![img_30.png](admin_img/img_30.png)
   
2. Click on the GitHub gear icon to set up the integration and grant permissions to the organizations we want to have access to TestQuality.

![img_31.png](admin_img/img_31.png)

3. Click Authorise and follow the wizard to allow GitHub to link to TestQuality. 

Important note: You need to be the administrator of the repository that you are linking. The reason for this is during the setup of the integration, the system configures webhooks to send information. 
Once the integration is configured, the admin rights are no longer required. 


Next we are going to add organizations to testQuality to allow users that belong to the organization to sign up.

4. Under "Company" in the administration area click on the 'Add Sign up' in the Automatic Sign up section.
5. Select the sign up type as "GitHub" and Select an organization within your GitHub account.



![img_26.png](admin_img/img_26.png)

### Delete 

**WARNING** This will remove your site entirely. This action is not reversible. 
