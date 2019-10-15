# Security in Angular

- **For explicit access to DOM, use DomSanitizer**
```ts
constructor(private sanitizer: DomSanitizer) {
  // javascript: URLs are dangerous if attacker controlled.
  // Angular sanitizes them in data binding, but you can
  // explicitly tell Angular to trust this value:
  this.dangerousUrl = 'javascript:alert("Hi there")';
  this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
}
```
- **Use the offline template compiler**
  - don't dynamically generate templates
- **Server-side XSS protection**
  - HTML constructed on the server is vulnerable to injection attacks.
  - Don't generate Angular templates on the server side using a templating language; doing this carries a high risk of introducing template-injection vulnerabilities.
- **HTTP-level Vulnerabilities**
  - Angular has built-in support for 2 common http vulnerabilities (CSRF and XSSI) Cross-site Resource Forgery and Cross-site Script Inclusion


- References:
  - https://angular.io/guide/security