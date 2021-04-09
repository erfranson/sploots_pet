<style lang='scss'>
    @import '../scss/components/_searchBar.scss';
</style>


<label class="searchBar__label" for="searchBar__input">
    <div class="searchBar">
        
            <img class="searchBar__icon" src="images/search.svg" alt="search icon">
            <input class="searchBar__input" id="searchBar__input" v-model="searchValue" type="text" placeholder="Try searching poodles...">
        
    </div>
</label>