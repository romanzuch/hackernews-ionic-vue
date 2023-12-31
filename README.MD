# Hacker News

This Hacker News client is written in VueJS using Ionic Capacitor.

## Screenshots
<div style="display:flex;">
  <img src="https://github.com/romanzuch/hackernews-ionic-vue/blob/develop/screenshots/best.png" alt="best" width="30%" />
  <img src="https://github.com/romanzuch/hackernews-ionic-vue/blob/develop/screenshots/new.png" alt="new" width="30%" />
  <img src="https://github.com/romanzuch/hackernews-ionic-vue/blob/develop/screenshots/story.png" alt="story" width="30%" />
</div>

<div style="display:flex;">
  <img src="https://github.com/romanzuch/hackernews-ionic-vue/blob/develop/screenshots/story_comments.png" alt="comments" width="30%" />
  <img src="https://github.com/romanzuch/hackernews-ionic-vue/blob/develop/screenshots/story_comments_extended.png" alt="comments_extended" width="30%" />
  <img src="https://github.com/romanzuch/hackernews-ionic-vue/blob/develop/screenshots/story_comments_extended_dark.png" alt="comments_extended_dark" width="30%" />
</div>



## Set up

Following the steps from [here](https://ionicframework.com/docs/vue/quickstart), you can set up a blank project. The following steps are solely for iOS.

### 1. Install the latest version of Ionic CLI

```
npm install -g @ionic/cli@latest
```

### 2. Instantiate the blank project

```
ionic start hacker-news blank --type vue
```

### 3. Set up Xcode

If you haven't already, install Xcode and set up the command-line tools.

```
xcode-select --install
```

### 4. Set up a development team and create a simulator

[https://ionicframework.com/docs/developing/ios](https://ionicframework.com/docs/developing/ios)

### 5. Generate the native project and set the package ID

```
ionic capacitor add ios
```

Navigate to `capacitor.config.json` and set the correct `appId`. Then set this ID as the Bundle Identifier in Xcode. 

### 6. Create the web assets to prepare for a Simulator build

```
ionic capacitor copy ios
```

### 7. Run the project with Live-reload using Capacitor

```
ionic capacitor run ios -l --external
```

## Mobile Safe Areas

```
env(safe-area-inset-top);
env(safe-area-inset-right);
env(safe-area-inset-bottom);
env(safe-area-inset-left);
```