workflow "Deploy on GItHub page" {
  on = "push"
  resolves = [
    "Deploy",
    "GitHub Action for npm",
    "Install packages",
  ]
}

action "Install packages" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "Deploy" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install packages"]
  args = "run deploy"
  secrets = ["GITHUB_TOKEN"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install packages"]
  args = "run build"
}
