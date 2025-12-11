import { NextResponse } from 'next/server'
 
export function middleware(request) {
  const url = request.url
if( url.includes("can-trust-beneficiaries-contest-a-trust") ){
  return NextResponse.redirect(new URL("blogs/can-trust-beneficiaries-contest-a-trust/", request.url))
}
else if ( url.includes("asset-protection") ){
  return NextResponse.redirect(new URL("blogs/asset-protection/", request.url))
}
else if ( url.includes("can-trust-beneficiaries-waive-their-right-to-an-accounting") ){
  return NextResponse.redirect(new URL("blogs/can-trust-beneficiaries-waive-their-right-to-an-accounting/", request.url))
}
else if (url.includes("with-dementia") ){
  return NextResponse.redirect(new URL("blogs/with-dementia/", request.url))
}
else if (url.includes("florida-trustees-duty-to-inform") ){
  return NextResponse.redirect(new URL("blogs/florida-trustee-duty-to-Inform", request.url))
}
else if (url.includes("testate-vs-intestate") ){
  return NextResponse.redirect(new URL("blogs/testate-vs-intestate/", request.url))
}

else if (url.includes("florida-trustee-duties") ){
  return NextResponse.redirect(new URL("blogs/florida-trustee-duties/", request.url))
}
else if (url.includes("uncategorized/legal-team") ){
  return NextResponse.redirect(new URL("/legal-team/", request.url))
}
else if (url.includes("estate-plan")){
  return NextResponse.redirect(new URL("blogs/estate-plan", request.url))
}
else if (url.includes("florida-trustees-duty-to-account")) {
  return NextResponse.redirect(new URL("blogs/florida-trustees-duty-to-account", request.url))
}

else if (url.includes("top-legal-rights-of-qualified-trust-beneficiaries")){
  return NextResponse.redirect(new URL("blogs/top-legal-rights-of-qualified-trust-beneficiaries", request.url))
}
else if (url.includes("understanding-and-navigating-ancillary-administration-in-florida")) {
return NextResponse.redirect(new URL("blogs/understanding-and-navigating-ancillary-administration-in-florida", request.url))
}

else if (url.includes("when-to-deposit-last-will")){
  return NextResponse.redirect(new URL("blogs/when-to-deposit-last-will", request.url))
}
else {
  return NextResponse.next()  
}
}
export const config = {
  matcher: ['/can-trust-beneficiaries-contest-a-trust/',"/asset-protection", "/can-trust-beneficiaries-waive-their-right-to-an-accounting", "/with-dementia", "/florida-trustees-duty-to-inform","/testate-vs-intestate" , "/florida-trustee-duties", "/uncategorized/legal-team", "/estate-plan", "/florida-trustees-duty-to-account", "/top-legal-rights-of-qualified-trust-beneficiaries" , "/understanding-and-navigating-ancillary-administration-in-florida", "/when-to-deposit-last-will" ]
}