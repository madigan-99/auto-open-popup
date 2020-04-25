import os 

stuName = [];
beginning = "https://github.com/info-201a-sp20/"
url = input("What's the assignment name? ")
url = url + "-"

for student in stuName:
	temp = (beginning + url + student + ".git")
	repo_url = f'{temp}'
	os.system("git clone {}".format(repo_url))
