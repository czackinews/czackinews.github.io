'''import datetime
today = datetime.datetime.today()
datem = datetime.datetime(today.year, today.month, 1)
datem = str(datem)
print(datem[:7])'''




def new_article(filename):
    fileaddress = "articles_txt/" + str(filename) + ".txt"
    everything_right = True
    try:
        a = open(fileaddress, encoding="UTF-8")
    except FileNotFoundError:
        everything_right = False
        print('Taki plik nie został znaleziony.')

    if everything_right == True:
        file = str(a.read())
        lines = file.split('\n')
        key_words = ['subttl: ', 'title: ',
                     'date: ', 'tags: ', 'introduction: ', 'thumbnail_image: ',
                     'art_back_image: ', 'url_address: ']

        bebechy_artykulu = {}

        for line in lines:
            for key_word in key_words:
                if key_word in line:
                    fixed_line = line.replace(key_word, '')
                    bebechy_artykulu[key_word] = fixed_line
                    file = file.replace(line, '')
                    break

        file = file.replace('\n', '')
        bebechy_artykulu['article: '] = file

        print(bebechy_artykulu)


        article_template_open = open("article_template.txt", 'r', encoding="UTF-8")
        article_template = str(article_template_open.read())

        article_finished = article_template.format(title=bebechy_artykulu['title: '],
                                subtitle=bebechy_artykulu['subttl: '],
                                introduction=bebechy_artykulu['introduction: '],
                                article=bebechy_artykulu['article: '],
                                art_back_image=bebechy_artykulu['art_back_image: '])


        print('\n')
        print('\n')
        print('\n')
        print(article_finished)




        from pathlib import Path
        path_name = "articles/" + bebechy_artykulu['date: '][:7] + '/' + bebechy_artykulu['date: ']
        print(path_name)
        Path(path_name + '/images').mkdir(parents=True, exist_ok=True)

        path_name_full = path_name + '/' + bebechy_artykulu['url_address: '] + '.html'

        article_file = open(path_name_full, 'wb')
        article_file.write(article_finished.encode())
        article_file.close()
        a.close()


print('Wybierz nazwę pliku (bez rozszerzenia .txt ani folderu, sama nazwa pliku), z którego mamy zrobić nowy artykuł.')
filename = input("Nazwa pliku to: ")
new_article(filename)
