# MAC Configuration :

    1. Install  nodejs
    2. npm i -g ionic@latest
    3. Install  Xcode
    4. Install  CocoaPods

# Windows Configuration :

    1. install nodejs
    2. npm i -g ionic@latest
    3. install android studio

# Project Dependence :

    1. run 'npm i' under project root directory
    2. Ionic cordova platform add android && Ionic cordova platform add ios
    3. Go to plugins/cordova-plugin-request-location-accuracy/plugin.xml
        Comment out below lines
        <preference name="PLAY_SERVICES_LOCATION_VERSION" default="16.+" />
        <framework src="com.google.android.gms:play-services-location:$PLAY_SERVICES_LOCATION_VERSION" />
        Add new line as below
        <framework src="com.google.android.gms:play-services-location:10.+" />
    4. Ionic corodova build android (or) ionic serve

# Deploy :

    1. Android :
        1. ionic cordova build android --prod --release
        2. Go to "platforms\android\app\build\outputs\apk\debug" and run "jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore <yourapkname>.apk alias_name"
        3. And run this comment in same directoty zipalign -v 4 <yourapkname>.apk <Outputyourapkname>.apk
    2. IOS :
        1. ionic cordova build ios --release
        2. Now, open the platforms/ios/<YourAppName>.xcodeproj file in Xcode
        3. select Product -> Archive, and the Archive organizer appears and displays the new archive.At this point you can click the Upload to App Store... button
